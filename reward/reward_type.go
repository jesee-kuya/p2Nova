package reward

import (
	"sync"

	"github.com/jesee-kuya/p2Nova/core"
)

type RewardSystem struct {
	Mu       sync.RWMutex
	Balances map[string]float64
	Bc       *core.Blockchain
}
