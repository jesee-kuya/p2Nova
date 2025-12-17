package service

import (
	"fmt"

	"github.com/jesee-kuya/p2Nova/internal/http"
	"github.com/jesee-kuya/p2Nova/internal/model"
	"golang.org/x/crypto/bcrypt"
)

func (s *AuthServiceImpl) Register(requestUser *http.RequestUser) (*model.User, error) {
	if requestUser.Email == "" ||
		requestUser.FirstName == "" ||
		requestUser.LastName == "" ||
		requestUser.Password == "" ||
		requestUser.Username == "" {
		return nil, fmt.Errorf(
			"ensure you fill all the required fields",
		)
	}

	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(requestUser.Password), bcrypt.DefaultCost)
	if err != nil {
		return nil, fmt.Errorf("failed to encrypt password")
	}

	requestUser.Password = string(hashedPassword)

	err = ValidateEmail(requestUser.Email)
	if err != nil {
		return nil, fmt.Errorf("failed to create user: %w", err)
	}

	user, err := s.AuthRepository.CreateUser(requestUser)
	if err != nil {
		return nil, fmt.Errorf("failed to create user: %w", err)
	}

	return user, nil
}
