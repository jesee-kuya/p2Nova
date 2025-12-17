package authHandler

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/jesee-kuya/p2Nova/internal/handler"
)

func (h *AuthHandlerImpl) Register(c *gin.Context) {
	var reqUser handler.RequestUser

	if err := c.ShouldBindJSON(&reqUser); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{})
	}
}
