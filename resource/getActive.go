package resource

import (
	"time"
)

func (dm *DeviceManager) GetActiveDevices() []*Device {
	dm.Mu.Lock()
	defer dm.Mu.Unlock()
	now := time.Now()
	active := make([]*Device, 0)
	for _, d := range dm.Devices {
		if now.Sub(d.LastHeartbeat) < dm.HeartbeatTimeout {
			d.Status = "active"
			active = append(active, d)
		} else {
			d.Status = "offline"
		}
	}
	return active
}