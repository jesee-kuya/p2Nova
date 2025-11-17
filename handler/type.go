package handler

import (
	"github.com/jesee-kuya/p2Nova/core"
	"github.com/jesee-kuya/p2Nova/resource"
	"github.com/jesee-kuya/p2Nova/reward"
	"github.com/jesee-kuya/p2Nova/task"
)

type Server struct {
	Bc            *core.Blockchain
	DeviceManager *resource.DeviceManager
	TaskManager   *task.TaskManager
	RewardSystem  *reward.RewardSystem

	// minimal API key auth
	ApiKey string
}
