package keeper

import (
	"context"

	"github.com/Electronic-Signatures-Industries/xdv-node/x/xdvnode/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) CreateFile(goCtx context.Context, msg *types.MsgCreateFile) (*types.MsgCreateFileResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var file = types.File{
		Creator:     msg.Creator,
		Data:        msg.Data,
		ContentType: msg.ContentType,
	}

	cid, _ := k.AppendFile(
		ctx,
		file,
	)

	return &types.MsgCreateFileResponse{
		Cid: cid.String(),
	}, nil
}
