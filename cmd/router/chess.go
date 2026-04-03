package router

import (
	"encoding/json"
	"io"
	"net/http"

	"github.com/The-Chikitaverse-Inc/Chikitaverse-API/cmd"
	"github.com/gin-gonic/gin"
)

func Chess(rtr *gin.RouterGroup) {
	chessGroup := rtr.Group("/chess")
	
	chessGroup.GET("/", func(ctx *gin.Context) {
		chessApi := cmd.GetEnv("CHESSAPI", "")
		resp, err := http.Get(chessApi)

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
			"data": json.RawMessage(body),
		})
	})

	chessGroup.GET("/members", func (ctx *gin.Context)  {
		chessApi := cmd.GetEnv("MEMBERCHESS", "")
		resp, err := http.Get(chessApi)

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
			"data": json.RawMessage(body),
		})
	})
}