package test

import (
	"github.com/gin-gonic/gin"
)

type Testtype struct { 
	Test string `json:"name" binding:"required"`
}

func Test(rtr *gin.RouterGroup) {
	test := rtr.Group("/test")

	test.POST("/post", func(ctx *gin.Context) {
		var newTest Testtype

		if err := ctx.ShouldBindJSON(&newTest); err != nil {
			ctx.JSON(400, gin.H{
				"error": err.Error(),
			})
			return
		}

		ctx.JSON(201, gin.H{
			"message":  "POST method test, everything ok",
			"test": newTest,
		})
	})

	test.GET("/get", func(ctx *gin.Context) {
		ctx.JSON(200, gin.H{
			"msg": "test with everything correct.",
			"status": "ok",
		})
	})
}