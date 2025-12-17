package authHandler

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/jesee-kuya/p2Nova/internal/handler"
)

func (h *AuthHandlerImpl) Login(c *gin.Context) {
	var reqLogin handler.RequestLogin

	if err := c.ShouldBindJSON(&reqLogin); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "invalid request payload",
		})
		return
	}

	user, err := h.AuthService.Login(&reqLogin)
	if err != nil {
		c.JSON(http.StatusConflict, gin.H{
			"error": err.Error(),
		})
		return
	}

	user.PasswordHash = ""
	c.JSON(http.StatusCreated, gin.H{
		"user":    user,
		"message": "login successful, welcome",
	})
}
