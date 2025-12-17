package repository

import (
	"fmt"

	"github.com/jesee-kuya/p2Nova/internal/model"
	"gorm.io/gorm"
)

func (r *AuthRepositoryImpl) GetUserByEmail(email string) (*model.User, error) {
	var user model.User
	if err := r.Db.Where("email = ?", email).First(&user).Error; err != nil {
		if err == gorm.ErrRecordNotFound {
			return nil, fmt.Errorf("user record not found")
		}
		return nil, fmt.Errorf("failed to fetch user by email: %w", err)
	}
	return &user, nil
}
