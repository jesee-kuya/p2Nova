package task

import (
	"errors"
	"time"
)

func (tm *TaskManager) CreateTask(t *TrainingTask) error {
	if t == nil || t.ID == "" {
		return errors.New("invalid task")
	}
	tm.Mu.Lock()
	defer tm.Mu.Unlock()
	t.Status = "pending"
	t.CreatedAt = time.Now()
	if t.Replicas <= 0 {
		t.Replicas = 1
	}
	t.AssignedDevices = []string{}
	tm.Tasks[t.ID] = t
	return nil
}
