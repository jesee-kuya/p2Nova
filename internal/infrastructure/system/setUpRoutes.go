package system

import "github.com/gin-gonic/gin"

func (sys *P2Nova) SetUpRoutes() *gin.Engine {
	router := gin.Default()

	api := router.Group("/api")

	authRoutes := api.Group("/auth")
	{
		authRoutes.POST("/register", sys.Handlers.AuthHandler.Register)
		authRoutes.POST("/login", sys.Handlers.AuthHandler.Login)
	}

	return router
}
