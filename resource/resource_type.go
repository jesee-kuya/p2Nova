package resource

import (
	"sync"
	"time"
)

type Device struct {
	ID            string    `json:"id"`
	Name          string    `json:"name"`
	Type          string    `json:"type"`      // mobile|desktop|server
	TotalCPU      float64   `json:"total_cpu"` // logical CPUs / units
	TotalRAM      float64   `json:"total_ram"` // MB
	TotalGPU      float64   `json:"total_gpu"` // GPU units
	Share         float64   `json:"share"`     // fraction (0..1) of TOTAL they're willing to give (default 0.5)
	AllocatedCPU  float64   `json:"allocated_cpu"`
	AllocatedRAM  float64   `json:"allocated_ram"`
	AllocatedGPU  float64   `json:"allocated_gpu"`
	Status        string    `json:"status"`
	LastHeartbeat time.Time `json:"last_heartbeat"`
	IP            string    `json:"ip_address,omitempty"`

	TotalTasksDone int     `json:"total_tasks_done"`
	TotalRewards   float64 `json:"total_rewards"`
}

type DeviceManager struct {
	Mu      sync.RWMutex
	Devices map[string]*Device
	// heartbeat timeout
	HeartbeatTimeout time.Duration
}
