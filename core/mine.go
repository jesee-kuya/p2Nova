package core

import "time"

func (bc *Blockchain) MinerLoop() {
	for range bc.mineTrigger {
		bc.MineOnce()
		// small pause so mining doesn't loop too tightly
		time.Sleep(100 * time.Millisecond)
	}
}

func (bc *Blockchain) MineOnce() {
	bc.mu.Lock()
	defer bc.mu.Unlock()
	if len(bc.txPool) == 0 {
		return
	}
	prev := bc.blocks[len(bc.blocks)-1]
	newBlock := &Block{
		Index:        prev.Index + 1,
		Timestamp:    time.Now().Unix(),
		Transactions: bc.txPool,
		PreviousHash: prev.Hash,
		Nonce:        0,
	}
	// very lightweight "proof": look for hash with two leading zeros (fast)
	for {
		newBlock.Hash = bc.HashBlock(newBlock)
		if len(newBlock.Hash) >= 2 && newBlock.Hash[:2] == "00" {
			break
		}
		newBlock.Nonce++
		// small yield to avoid busy spin
		if newBlock.Nonce%1000 == 0 {
			time.Sleep(1 * time.Millisecond)
		}
	}
	bc.blocks = append(bc.blocks, newBlock)
	bc.txPool = nil
}
