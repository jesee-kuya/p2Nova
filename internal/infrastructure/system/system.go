package system

import authRepo "github.com/jesee-kuya/p2Nova/internal/domain/auth/repository"

type P2Nova struct {
	AuthRepository *authRepo.AuthRepository
}
