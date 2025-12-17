package authHandler

import (
	"github.com/gin-gonic/gin"
	"github.com/jesee-kuya/p2Nova/internal/http"
)

func (h *AuthHandlerImpl) Register(c *gin.Context) {
	var reqUser http.RequestUser

	if err := c.ShouldBindJSON(&reqUser); err != nil {
		c.JSON(http.StatusBadRequest, gin.H)
	}
}
