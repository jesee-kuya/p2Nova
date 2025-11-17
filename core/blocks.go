package core

func (bc *Blockchain) Blocks() []*Block {
	bc.mu.RLock()
	defer bc.mu.RUnlock()
	return append([]*Block(nil), bc.blocks...)
}
