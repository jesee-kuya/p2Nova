package system

import (
	"log"

	authRepo "github.com/jesee-kuya/p2Nova/internal/domain/auth/repository"
	"github.com/jesee-kuya/p2Nova/internal/domain/auth/service"
	"github.com/jesee-kuya/p2Nova/internal/handler/authHandler"
	"github.com/jesee-kuya/p2Nova/internal/infrastructure/database"
)

func Init() *P2Nova {
	db, err := database.NewConnection()
	if err != nil {
		log.Fatal(err)
	}

	// repositories
	authRepository := authRepo.NewAuthRepository(db)

	// services
	authService := service.NewAuthService(&authRepository)

	// handlers
	authenticationHandler := authHandler.NewAuthHandler(authService)

	repositories := Repositories{
		AuthRepository: &authRepository,
	}

	services := Services{
		AuthService: &authService,
	}

	handlers := Handlers{
		AuthHandler: authenticationHandler,
	}

	return &P2Nova{
		Repositories: repositories,
		Services:     services,
		Handlers:     handlers,
	}
}
