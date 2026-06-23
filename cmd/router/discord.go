package router

import (
	"encoding/json"
	"io"
	"net/http"

	"github.com/The-Chikitaverse-Inc/Chikitaverse-API/cmd"
	"github.com/The-Chikitaverse-Inc/Chikitaverse-API/cmd/middleware"
	"github.com/gin-gonic/gin"
)

func Discord(rtr *gin.RouterGroup) {
	discordGroup := rtr.Group("/discord")
	discordGroup.Use(middleware.Authrequired())

	discordGroup.GET("/", func(ctx *gin.Context) {
		discordApi := cmd.GetEnv("DISCORDAPI", "")
		resp, err := http.Get(discordApi)

		if err != nil {
			ctx.JSON(500, gin.H{
				"error": err.Error(),
			})
			return
		}
		defer resp.Body.Close()

		body, err := io.ReadAll(resp.Body)
		if err != nil {
			ctx.JSON(500, gin.H{
				"error": "Erro ao comunicar com a API",
			})
		}

		ctx.JSON(200, gin.H{
			"discord_data": json.RawMessage(body),
		})
	})


}