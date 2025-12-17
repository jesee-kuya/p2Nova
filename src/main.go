package main

import "github.com/jesee-kuya/p2Nova/internal/infrastructure/system"

func main() {
	sys := system.Init()

	router := sys.SetUpRoutes()

	router.Run(":8080")
}
