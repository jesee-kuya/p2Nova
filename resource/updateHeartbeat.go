package resource

import (
	"fmt"
	"time"
)

// Update heartbeat updates totals (e.g., available system resources) but does NOT
// overwrite existing allocations. Allocations remain until released.
func (dm *DeviceManager) UpdateHeartbeat(deviceID string, totals map[string]float64) error {
	dm.Mu.Lock()
	defer dm.Mu.Unlock()
	dev, ok := dm.Devices[deviceID]
	if !ok {
		return fmt.Errorf("device not found")
	}
	dev.LastHeartbeat = time.Now()
	if v, ok := totals["cpu"]; ok {
		dev.TotalCPU = v
	}
	if v, ok := totals["ram"]; ok {
		dev.TotalRAM = v
	}
	if v, ok := totals["gpu"]; ok {
		dev.TotalGPU = v
	}
	return nil
}
