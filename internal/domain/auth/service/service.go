package service

import (
	"github.com/jesee-kuya/p2Nova/internal/domain/auth/repository"
	"github.com/jesee-kuya/p2Nova/internal/handler"
	"github.com/jesee-kuya/p2Nova/internal/model"
)

type AuthService interface {
	Register(requestUser *handler.RequestUser) (*model.User, error)
	Login(requestUser *handler.RequestLogin) (*model.User, error)
}

type AuthServiceImpl struct {
	AuthRepository repository.AuthRepository
}
