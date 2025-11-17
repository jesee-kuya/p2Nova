package task

func NewTaskManager() *TaskManager {
	return &TaskManager{
		Tasks: map[string]*TrainingTask{},
	}
}
