package task

import "fmt"

func (tm *TaskManager) GetPending() []*TrainingTask {
	tm.Mu.RLock()
	defer tm.Mu.RUnlock()
	out := make([]*TrainingTask, 0)
	for _, t := range tm.Tasks {
		if t.Status == "pending" {
			out = append(out, t)
		}
	}
	return out
}

func (tm *TaskManager) Get(id string) (*TrainingTask, error) {
	tm.Mu.RLock()
	defer tm.Mu.RUnlock()
	t, ok := tm.Tasks[id]
	if !ok {
		return nil, fmt.Errorf("task not found")
	}
	c := *t
	return &c, nil
}
