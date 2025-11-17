package reward

import (
	"github.com/jesee-kuya/p2Nova/core"
)

func NewRewardSystem(bc *core.Blockchain) *RewardSystem {
	return &RewardSystem{
		Balances: map[string]float64{},
		Bc:       bc,
	}
}
