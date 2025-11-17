package resource

func (dm *DeviceManager) Release(deviceID string, cpu, ram, gpu float64) {
	dm.Mu.Lock()
	defer dm.Mu.Unlock()
	d, ok := dm.Devices[deviceID]
	if !ok {
		return
	}
	d.AllocatedCPU -= cpu
	if d.AllocatedCPU < 0 {
		d.AllocatedCPU = 0
	}
	d.AllocatedRAM -= ram
	if d.AllocatedRAM < 0 {
		d.AllocatedRAM = 0
	}
	d.AllocatedGPU -= gpu
	if d.AllocatedGPU < 0 {
		d.AllocatedGPU = 0
	}
	// if nothing allocated, mark idle
	if d.AllocatedCPU == 0 && d.AllocatedRAM == 0 && d.AllocatedGPU == 0 {
		d.Status = "idle"
	}
}
