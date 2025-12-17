package repository

import "gorm.io/gorm"

func NewAuthRepository(db *gorm.DB) AuthRepository {
	return &AuthRepositoryImpl{Db: *db}
}
