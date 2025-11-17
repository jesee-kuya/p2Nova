package task

import (
	"fmt"
	"time"
)

func (tm *TaskManager) Complete(taskID string) error {
	tm.Mu.Lock()
	defer tm.Mu.Unlock()
	t, ok := tm.Tasks[taskID]
	if !ok {
		return fmt.Errorf("task not found")
	}
	now := time.Now()
	t.Status = "completed"
	t.CompletedAt = &now
	return nil
}
