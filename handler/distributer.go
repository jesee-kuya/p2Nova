package handler

import (
	"context"
	"log"
	"time"

	"github.com/jesee-kuya/p2Nova/core"
	"github.com/jesee-kuya/p2Nova/utils"
)

// The distributor will try to find devices that can satisfy a task's per-device requirements.
// For simplicity: if one device can satisfy required resources, assign single device.
// If not, try splitting across multiple devices (basic greedy).
func (s *Server) Distributor(ctx context.Context, interval time.Duration) {
	ticker := time.NewTicker(interval)
	defer ticker.Stop()
	for {
		select {
		case <-ctx.Done():
			return
		case <-ticker.C:
			s.DistributeOnce()
		}
	}
}

func (s *Server) DistributeOnce() {
	pending := s.TaskManager.GetPending()
	devices := s.DeviceManager.GetActiveDevices()
	if len(pending) == 0 || len(devices) == 0 {
		return
	}
	// make a copy of device IDs to try reservations
	for _, task := range pending {
		if task.Status != "pending" {
			continue
		}
		// Try to find 'replicas' devices that have enough allocatable capacity.
		needed := task.Replicas
		assigned := make([]string, 0, needed)
		// local reservation record to rollback on failure
		type rsv struct {
			id  string
			cpu float64
			ram float64
			gpu float64
		}
		var reserves []rsv

		for _, d := range devices {
			if len(assigned) >= needed {
				break
			}
			// skip if device already busy beyond allocatable
			// try to reserve per-device required resources
			ok := s.DeviceManager.Reserve(d.ID, task.RequiredCPU, task.RequiredRAM, task.RequiredGPU)
			if ok {
				assigned = append(assigned, d.ID)
				reserves = append(reserves, rsv{d.ID, task.RequiredCPU, task.RequiredRAM, task.RequiredGPU})
			}
		}
		if len(assigned) >= needed {
			// finalize assignment
			_ = s.TaskManager.Assign(task.ID, assigned)
			// record assignment transaction
			for _, devID := range assigned {
				tx := core.Transaction{
					ID:        utils.GenID("assign"),
					Type:      "assignment",
					DeviceID:  devID,
					TaskID:    task.ID,
					Timestamp: time.Now().Unix(),
				}
				s.Bc.AddTransaction(tx)
			}
			log.Printf("Assigned task %s to devices %v\n", task.ID, assigned)
		} else {
			// rollback reservations
			for _, r := range reserves {
				s.DeviceManager.Release(r.id, r.cpu, r.ram, r.gpu)
			}
		}
	}
}
