package main

import (
	"log"

	"github.com/jesee-kuya/p2Nova/internal/infrastructure/database"
)

func main() {
	db, err := database.NewConnection()
	if err != nil {
		log.Fatal(err)
	}

	log.Println("Database connection successful")

	_ = db
}
