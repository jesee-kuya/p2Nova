package reward

import (
	"time"

	"github.com/jesee-kuya/p2Nova/core"
	"github.com/jesee-kuya/p2Nova/utils"
)

func (rs *RewardSystem) Issue(deviceID, taskID string, amount float64) {
	rs.Mu.Lock()
	defer rs.Mu.Unlock()
	rs.Balances[deviceID] += amount
	tx := core.Transaction{
		ID:        utils.GenID("reward"),
		Type:      "reward",
		DeviceID:  deviceID,
		TaskID:    taskID,
		Amount:    amount,
		Timestamp: time.Now().Unix(),
	}
	rs.Bc.AddTransaction(tx)
}
