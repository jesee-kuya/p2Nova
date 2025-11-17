package core

import "time"

func NewBlockchain() *Blockchain {
	bc := &Blockchain{
		blocks:      []*Block{},
		txPool:      []Transaction{},
		mineTrigger: make(chan struct{}, 1),
	}
	genesis := &Block{
		Index:        0,
		Timestamp:    time.Now().Unix(),
		Transactions: []Transaction{},
		PreviousHash: "0",
		Nonce:        0,
	}
	genesis.Hash = bc.HashBlock(genesis)
	bc.blocks = append(bc.blocks, genesis)
	go bc.MinerLoop()
	return bc
}
