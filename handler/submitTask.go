package handler

import (
	"encoding/json"
	"net/http"

	"github.com/jesee-kuya/p2Nova/task"
	"github.com/jesee-kuya/p2Nova/utils"
)

func (s *Server) HandleSubmitTask(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		utils.WriteJSON(w, http.StatusMethodNotAllowed, utils.JSON{"error": "method not allowed"})
		return
	}
	var t task.TrainingTask
	if err := json.NewDecoder(r.Body).Decode(&t); err != nil {
		utils.WriteJSON(w, http.StatusBadRequest, utils.JSON{"error": err.Error()})
		return
	}
	if t.ID == "" {
		t.ID = utils.GenID("task")
	}
	if err := s.TaskManager.CreateTask(&t); err != nil {
		utils.WriteJSON(w, http.StatusInternalServerError, utils.JSON{"error": err.Error()})
		return
	}
	utils.WriteJSON(w, http.StatusOK, utils.JSON{"status": "ok", "task_id": t.ID})
}
