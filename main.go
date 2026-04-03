package main

import (
	"log"

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

	serve := gin.Default()
	serve.GET("/", func(ctx *gin.Context) {
		ctx.JSON(200, gin.H{
			"title": "Chikitaverse API",
    		"incorporated": "The Chikitaverse Inc.",
    		"status": "ok",
    		"code": 200,
		})
	})
	
	router.Discord(&serve.RouterGroup)
	router.Chess(&serve.RouterGroup)

	serve.Run(":3000")
}