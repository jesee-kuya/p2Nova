package core

import "sync"

type Transaction struct {
	ID        string  `json:"id"`
	Type      string  `json:"type"` // registration | reward | claim | training
	DeviceID  string  `json:"device_id,omitempty"`
	TaskID    string  `json:"task_id,omitempty"`
	Amount    float64 `json:"amount,omitempty"`
	Timestamp int64   `json:"timestamp"`
	Data      string  `json:"data,omitempty"`
}

type Block struct {
	Index        int64         `json:"index"`
	Timestamp    int64         `json:"timestamp"`
	Transactions []Transaction `json:"transactions"`
	PreviousHash string        `json:"previous_hash"`
	Hash         string        `json:"hash"`
	Nonce        int64         `json:"nonce"`
}

type Blockchain struct {
	mu          sync.RWMutex
	blocks      []*Block
	txPool      []Transaction
	mineTrigger chan struct{}
}
