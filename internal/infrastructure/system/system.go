package system

import (
	authRepo "github.com/jesee-kuya/p2Nova/internal/domain/auth/repository"
	authService "github.com/jesee-kuya/p2Nova/internal/domain/auth/service"
	"github.com/jesee-kuya/p2Nova/internal/handler/authHandler"
)

type P2Nova struct {
	Repositories Repositories
	Services     Services
	Handlers     Handlers
}

type Repositories struct {
	AuthRepository *authRepo.AuthRepository
}

type Services struct {
	AuthService *authService.AuthService
}

type Handlers struct {
	AuthHandler authHandler.AuthHandler
}
