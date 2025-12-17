package authHandler

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/jesee-kuya/p2Nova/internal/handler"
)

func (h *AuthHandlerImpl) Register(c *gin.Context) {
	var reqUser handler.RequestUser

	if err := c.ShouldBindJSON(&reqUser); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "invalid request payload",
		})
		return
	}

	user, err := h.AuthService.Register(&reqUser)
	if err != nil {
		c.JSON(http.StatusConflict, gin.H{
			"error": err.Error(),
		})
		return
	}

	user.PasswordHash = ""

	c.JSON(http.StatusOK, gin.H{
		"user":    user,
		"message": "user created successfully",
	})
}
