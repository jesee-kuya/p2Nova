package handler

import (
	"encoding/json"
	"net/http"
	"time"

	"github.com/jesee-kuya/p2Nova/core"
	"github.com/jesee-kuya/p2Nova/utils"
)

func (s *Server) HandleHeartbeat(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		utils.WriteJSON(w, http.StatusMethodNotAllowed, utils.JSON{"error": "method not allowed"})
		return
	}
	var req struct {
		DeviceID string             `json:"device_id"`
		Metrics  map[string]float64 `json:"metrics"`
		IP       string             `json:"ip_address,omitempty"`
	}
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		utils.WriteJSON(w, http.StatusBadRequest, utils.JSON{"error": err.Error()})
		return
	}
	if req.DeviceID == "" {
		utils.WriteJSON(w, http.StatusBadRequest, utils.JSON{"error": "device_id required"})
		return
	}
	if err := s.DeviceManager.UpdateHeartbeat(req.DeviceID, req.Metrics); err != nil {
		utils.WriteJSON(w, http.StatusNotFound, utils.JSON{"error": err.Error()})
		return
	}
	// record light transaction
	tx := core.Transaction{
		ID:        utils.GenID("hb"),
		Type:      "heartbeat",
		DeviceID:  req.DeviceID,
		Timestamp: time.Now().Unix(),
	}
	s.Bc.AddTransaction(tx)
	utils.WriteJSON(w, http.StatusOK, utils.JSON{"status": "ok"})
}
