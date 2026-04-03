package cmd

import (
	"os"
)

func GetEnv(keys string, envdefault string) string {
	variablesEnv := os.Getenv(keys)
	if variablesEnv == "" {
		return envdefault
	}
	
	return variablesEnv
}