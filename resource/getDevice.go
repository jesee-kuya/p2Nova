package resource

import "fmt"

func (dm *DeviceManager) GetDevice(id string) (*Device, error) {
	dm.Mu.RLock()
	defer dm.Mu.RUnlock()
	d, ok := dm.Devices[id]
	if !ok {
		return nil, fmt.Errorf("device not found")
	}
	// return a copy to avoid external mutation
	copy := *d
	return &copy, nil
}
