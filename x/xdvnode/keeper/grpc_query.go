package keeper

import (
	"github.com/Electronic-Signatures-Industries/xdv-node/x/xdvnode/types"
)

var _ types.QueryServer = Keeper{}
