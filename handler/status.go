package handler

import (
	"net/http"

	"github.com/jesee-kuya/p2Nova/utils"
)

func (s *Server) HandleBlockchainStatus(w http.ResponseWriter, r *http.Request) {
	blocks := s.Bc.Blocks()
	utils.WriteJSON(w, http.StatusOK, utils.JSON{"total_blocks": len(blocks), "blocks": blocks})
}
