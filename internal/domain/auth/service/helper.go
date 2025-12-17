package service

import (
	"errors"
	"regexp"
)

func ValidateEmail(email string) error {
	const emailRegex = `^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$`
	re := regexp.MustCompile(emailRegex)

	if !re.MatchString(email) {
		return errors.New("invalid email address")
	}
	return nil
}
