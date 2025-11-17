package task

import "fmt"

func (tm *TaskManager) Assign(taskID string, deviceIDs []string) error {
	tm.Mu.Lock()
	defer tm.Mu.Unlock()
	t, ok := tm.Tasks[taskID]
	if !ok {
		return fmt.Errorf("task not found")
	}
	t.AssignedDevices = deviceIDs
	t.Status = "assigned"
	return nil
}
