package core

func (bc *Blockchain) AddTransaction(tx Transaction) {
	bc.mu.Lock()
	defer bc.mu.Unlock()
	bc.txPool = append(bc.txPool, tx)
	// trigger miner (best-effort non-blocking)
	select {
	case bc.mineTrigger <- struct{}{}:
	default:
	}
}
