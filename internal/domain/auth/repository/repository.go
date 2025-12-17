package repository

import (
	"github.com/jesee-kuya/p2Nova/internal/http"
	"github.com/jesee-kuya/p2Nova/internal/model"
	"gorm.io/gorm"
)

type AuthRepository interface {
	GetUserByEmail(email string) (*model.User, error)
	GetUserByUsername(username string) (*model.User, error)
	CreateUser(requestUser *http.RequestUser) (*model.User, error)
}

type AuthRepositoryImpl struct {
	Db gorm.DB
}
