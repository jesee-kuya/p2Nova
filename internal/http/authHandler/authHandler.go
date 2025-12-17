package authHandler

import (
	"github.com/gin-gonic/gin"
	"github.com/jesee-kuya/p2Nova/internal/domain/auth/service"
)

type AuthHandler interface {
	Register(c *gin.Context)
}

type AuthHandlerImpl struct {
	AuthService service.AuthService
}
