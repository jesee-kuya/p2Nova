package resource

import (
	"errors"
	"time"
)

func (dm *DeviceManager) RegisterDevice(d *Device) error {
	if d == nil || d.ID == "" {
		return errors.New("invalid device")
	}
	dm.Mu.Lock()
	defer dm.Mu.Unlock()
	// default share
	if d.Share <= 0 || d.Share > 1 {
		d.Share = 0.5
	}
	// ensure totals non-negative
	if d.TotalCPU < 0 {
		d.TotalCPU = 0
	}
	if d.TotalRAM < 0 {
		d.TotalRAM = 0
	}
	if d.TotalGPU < 0 {
		d.TotalGPU = 0
	}
	d.Status = "idle"
	d.LastHeartbeat = time.Now()
	dm.Devices[d.ID] = d
	return nil
}
