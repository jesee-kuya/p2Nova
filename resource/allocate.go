package resource

func (d *Device) AllocatableCPU() float64 { return d.TotalCPU * d.Share }
func (d *Device) AllocatableRAM() float64 { return d.TotalRAM * d.Share }
func (d *Device) AllocatableGPU() float64 { return d.TotalGPU * d.Share }
