package resource

// Try to reserve resources on a device. Returns true if reservation succeeded.
func (dm *DeviceManager) Reserve(deviceID string, cpu, ram, gpu float64) bool {
	dm.Mu.Lock()
	defer dm.Mu.Unlock()
	d, ok := dm.Devices[deviceID]
	if !ok {
		return false
	}
	// compute remaining allocatable
	remainingCPU := d.AllocatableCPU() - d.AllocatedCPU
	remainingRAM := d.AllocatableRAM() - d.AllocatedRAM
	remainingGPU := d.AllocatableGPU() - d.AllocatedGPU
	if remainingCPU+1e-9 >= cpu && remainingRAM+1e-9 >= ram && remainingGPU+1e-9 >= gpu {
		d.AllocatedCPU += cpu
		d.AllocatedRAM += ram
		d.AllocatedGPU += gpu
		d.Status = "busy"
		return true
	}
	return false
}
