package main

import (
	"log"
	"os"

	"github.com/The-Chikitaverse-Inc/Chikitaverse-API/cmd/router"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

func main() {
	//* Config Env
	err := godotenv.Load()
	if err != nil {
		log.Fatalln("Erro ao Carregar o Env")
	}

	port := os.Getenv("PORT")
	if port == "" {
		port = "8000"
	}

	serve := gin.Default()
	serve.GET("/", func(ctx *gin.Context) {
		ctx.JSON(200, gin.H{
			"title": "Chikitaverse API",
    		"incorporated": "The Chikitaverse Inc.",
    		"status": "ok",
    		"code": 200,
		})
	})
	
	router.Chess(&serve.RouterGroup)
	router.Discord(&serve.RouterGroup)

	if err := serve.Run(":" + port); err != nil {
		log.Fatal("Erro iniciar API: ", err)
	}
}