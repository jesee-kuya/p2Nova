package repository

import (
	"fmt"

	"github.com/jesee-kuya/p2Nova/internal/http"
	"github.com/jesee-kuya/p2Nova/internal/model"
)

func (r *AuthRepositoryImpl) CreateUser(requestUser *http.RequestUser) (*model.User, error) {
	user := &model.User{
		FirstName: requestUser.FirstName,
		LastName:  requestUser.LastName,
		Email:     requestUser.Email,
		Username:  requestUser.Username,
		Password:  requestUser.Password,
	}

	if err := r.Db.Create(user).Error; err != nil {
		return nil, fmt.Errorf("failed to create user: %w", err)
	}

	return user, nil
}
