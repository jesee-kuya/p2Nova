package authHandler

import "github.com/jesee-kuya/p2Nova/internal/domain/auth/service"

func NewAuthHandler(authService service.AuthService) AuthHandler {
	return &AuthHandlerImpl{AuthService: authService}
}
