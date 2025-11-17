package handler

import (
	"encoding/json"
	"net/http"

	"github.com/jesee-kuya/p2Nova/utils"
)

func (s *Server) HandleClaimReward(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		utils.WriteJSON(w, http.StatusMethodNotAllowed, utils.JSON{"error": "method not allowed"})
		return
	}
	var req struct {
		DeviceID string `json:"device_id"`
	}
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		utils.WriteJSON(w, http.StatusBadRequest, utils.JSON{"error": err.Error()})
		return
	}
	amt, err := s.RewardSystem.Claim(req.DeviceID)
	if err != nil {
		utils.WriteJSON(w, http.StatusBadRequest, utils.JSON{"error": err.Error()})
		return
	}
	utils.WriteJSON(w, http.StatusOK, utils.JSON{"status": "ok", "amount": amt})
}
