package resource

import "time"

func NewDeviceManager() *DeviceManager {
	return &DeviceManager{
		Devices:          map[string]*Device{},
		HeartbeatTimeout: 2 * time.Minute,
	}
}
