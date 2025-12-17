package service

import (
	"fmt"

	"github.com/jesee-kuya/p2Nova/internal/http"
	"github.com/jesee-kuya/p2Nova/internal/model"
)

func (s *AuthServiceImpl) Login(requestLogin *http.RequestLogin) (*model.User, error) {
	user := &model.User{}
	err := ValidateEmail(requestLogin.Username)
	if err != nil {
		user, err = s.AuthRepository.GetUserByUsername(requestLogin.Username)
		if err != nil {
			return nil, fmt.Errorf("credentials failed: unknown username")
		}
	} else {
		user, err = s.AuthRepository.GetUserByEmail(requestLogin.Username)
		if err != nil {
			return nil, fmt.Errorf("credentials failed: unkown email")
		}
	}

	return user, nil
}
