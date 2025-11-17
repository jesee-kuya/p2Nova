package handler

import (
	"encoding/json"
	"net/http"

	"github.com/jesee-kuya/p2Nova/utils"
)

func (s *Server) HandleCompleteTask(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		utils.WriteJSON(w, http.StatusMethodNotAllowed, utils.JSON{"error": "method not allowed"})
		return
	}
	var req struct {
		TaskID   string  `json:"task_id"`
		DeviceID string  `json:"device_id"`
		CPU      float64 `json:"cpu"`
		RAM      float64 `json:"ram"`
		GPU      float64 `json:"gpu"`
		Success  bool    `json:"success"`
	}
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		utils.WriteJSON(w, http.StatusBadRequest, utils.JSON{"error": err.Error()})
		return
	}
	// Release resources from device (best-effort)
	go s.DeviceManager.Release(req.DeviceID, req.CPU, req.RAM, req.GPU)

	if req.Success {
		// mark task complete (simple model: one device completes the task)
		_ = s.TaskManager.Complete(req.TaskID)

		// Issue reward to device (if task exists)
		if task, err := s.TaskManager.Get(req.TaskID); err == nil {
			s.RewardSystem.Issue(req.DeviceID, req.TaskID, task.RewardPerDevice)
		}
	}

	utils.WriteJSON(w, http.StatusOK, utils.JSON{"status": "ok"})
}
