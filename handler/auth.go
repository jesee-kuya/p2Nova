package handler

import (
	"net/http"

	"github.com/jesee-kuya/p2Nova/utils"
)

func (s *Server) Auth(next http.HandlerFunc) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		// simple header-based API key
		key := r.Header.Get("X-API-Key")
		if s.ApiKey != "" && key != s.ApiKey {
			utils.WriteJSON(w, http.StatusUnauthorized, utils.JSON{"error": "unauthorized"})
			return
		}
		next(w, r)
	}
}
