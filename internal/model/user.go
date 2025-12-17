package model

type User struct {
	ID        uint   `gorm:"primaryKey"`
	FirstName string `gorm:"not null"`
	LastName  string `gorm:"not null"`
	Email     string `gorm:"unique;not null"`
	Username  string `gorm:"unique;not null"`
	Password  string `gorm:"not null"`
}
