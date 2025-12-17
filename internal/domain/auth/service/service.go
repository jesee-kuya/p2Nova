package service

import (
	"github.com/jesee-kuya/p2Nova/internal/domain/auth/repository"
	"github.com/jesee-kuya/p2Nova/internal/http"
	"github.com/jesee-kuya/p2Nova/internal/model"
)

type AuthService interface {
	Register(requestUser *http.RequestUser) (*model.User, error)
	Login(requestUser *http.RequestLogin) (*model.User, error)
}

type AuthServiceImpl struct {
	AuthRepository repository.AuthRepository
}
