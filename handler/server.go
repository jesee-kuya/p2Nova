package handler

import (
	"github.com/jesee-kuya/p2Nova/core"
	"github.com/jesee-kuya/p2Nova/resource"
	"github.com/jesee-kuya/p2Nova/reward"
	"github.com/jesee-kuya/p2Nova/task"
)

func NewServer(apiKey string) *Server {
	bc := core.NewBlockchain()
	dm := resource.NewDeviceManager()
	tm := task.NewTaskManager()
	rs := reward.NewRewardSystem(bc)
	return &Server{
		Bc:            bc,
		DeviceManager: dm,
		TaskManager:   tm,
		RewardSystem:  rs,
		ApiKey:        apiKey,
	}
}
