package task

import (
	"sync"
	"time"
)

type TrainingTask struct {
	ID              string     `json:"id"`
	ModelName       string     `json:"model_name"`
	DatasetSize     int64      `json:"dataset_size"`
	RequiredCPU     float64    `json:"required_cpu"` // per-device request (can be split)
	RequiredRAM     float64    `json:"required_ram"`
	RequiredGPU     float64    `json:"required_gpu"`
	Status          string     `json:"status"` // pending | assigned | processing | completed | failed
	AssignedDevices []string   `json:"assigned_devices"`
	CreatedAt       time.Time  `json:"created_at"`
	CompletedAt     *time.Time `json:"completed_at,omitempty"`
	RewardPerDevice float64    `json:"reward_per_device"`
	// meta: how many devices needed / or can be scaled across devices
	Replicas int `json:"replicas"`
}

type TaskManager struct {
	Mu    sync.RWMutex
	Tasks map[string]*TrainingTask
}
