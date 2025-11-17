package reward

func (rs *RewardSystem) GetBalance(deviceID string) float64 {
	rs.Mu.RLock()
	defer rs.Mu.RUnlock()
	return rs.Balances[deviceID]
}
