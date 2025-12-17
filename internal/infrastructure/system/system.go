package system

import (
	authRepo "github.com/jesee-kuya/p2Nova/internal/domain/auth/repository"
	authService "github.com/jesee-kuya/p2Nova/internal/domain/auth/service"
)

type P2Nova struct {
	AuthRepository *authRepo.AuthRepository
	AuthService    *authService.AuthService
}
