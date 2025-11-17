package core

import (
	"crypto/sha256"
	"encoding/hex"
	"encoding/json"
)

func (bc *Blockchain) HashBlock(b *Block) string {
	// NOTE: we marshal without the Hash field so hash is deterministic
	tmp := struct {
		Index        int64
		Timestamp    int64
		Transactions []Transaction
		PreviousHash string
		Nonce        int64
	}{
		b.Index, b.Timestamp, b.Transactions, b.PreviousHash, b.Nonce,
	}
	data, _ := json.Marshal(tmp)
	h := sha256.Sum256(data)
	return hex.EncodeToString(h[:])
}
