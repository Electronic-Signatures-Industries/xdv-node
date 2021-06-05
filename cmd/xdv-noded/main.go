package main

import (
	"os"

	"github.com/Electronic-Signatures-Industries/xdv-node/app"
	"github.com/Electronic-Signatures-Industries/xdv-node/cmd/xdv-noded/cmd"
	svrcmd "github.com/cosmos/cosmos-sdk/server/cmd"
)

func main() {
	rootCmd, _ := cmd.NewRootCmd()
	if err := svrcmd.Execute(rootCmd, app.DefaultNodeHome); err != nil {
		os.Exit(1)
	}
}
