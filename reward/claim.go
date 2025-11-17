package reward

import (
	"fmt"
	"time"

	"github.com/jesee-kuya/p2Nova/core"
	"github.com/jesee-kuya/p2Nova/utils"
)

func (rs *RewardSystem) Claim(deviceID string) (float64, error) {
	rs.Mu.Lock()
	defer rs.Mu.Unlock()
	b := rs.Balances[deviceID]
	if b <= 0 {
		return 0, fmt.Errorf("no balance")
	}
	rs.Balances[deviceID] = 0
	tx := core.Transaction{
		ID:        utils.GenID("claim"),
		Type:      "claim",
		DeviceID:  deviceID,
		Amount:    b,
		Timestamp: time.Now().Unix(),
	}
	rs.Bc.AddTransaction(tx)
	return b, nil
}
