package service

import "github.com/jesee-kuya/p2Nova/internal/domain/auth/repository"

func NewAuthService(repository *repository.AuthRepository) AuthService {
	return &AuthServiceImpl{AuthRepository: *repository}
}
