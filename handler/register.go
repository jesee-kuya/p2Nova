package handler

import (
	"encoding/json"
	"net/http"
	"time"

	"github.com/jesee-kuya/p2Nova/core"
	"github.com/jesee-kuya/p2Nova/resource"
	"github.com/jesee-kuya/p2Nova/utils"
)

func (s *Server) HandleRegister(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		utils.WriteJSON(w, http.StatusMethodNotAllowed, utils.JSON{"error": "method not allowed"})
		return
	}
	var d resource.Device
	if err := json.NewDecoder(r.Body).Decode(&d); err != nil {
		utils.WriteJSON(w, http.StatusBadRequest, utils.JSON{"error": err.Error()})
		return
	}
	if d.ID == "" {
		d.ID = utils.GenID("dev")
	}
	if err := s.DeviceManager.RegisterDevice(&d); err != nil {
		utils.WriteJSON(w, http.StatusInternalServerError, utils.JSON{"error": err.Error()})
		return
	}
	// record
	tx := core.Transaction{
		ID:        utils.GenID("reg"),
		Type:      "registration",
		DeviceID:  d.ID,
		Timestamp: time.Now().Unix(),
	}
	s.Bc.AddTransaction(tx)
	utils.WriteJSON(w, http.StatusOK, utils.JSON{"status": "ok", "device_id": d.ID})
}
