package keeper

import (
	"context"

	"github.com/ipfs/go-cid"

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

	lnk, _ := k.AppendFile(
		ctx,
		file,
	)

	id, _ := cid.Decode(lnk.String())
	return &types.MsgCreateFileResponse{
		Cid: id.String(),
	}, nil
}

func (k msgServer) PutBlock(goCtx context.Context, msg *types.MsgPutBlock) (*types.MsgPutBlockResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var file = types.File{
		Creator:     msg.Creator,
		Data:        msg.Data,
		ContentType: msg.ContentType,
	}

	lnk, _ := k.AppendFile(
		ctx,
		file,
	)

	id, _ := cid.Decode(lnk.String())
	return &types.MsgPutBlockResponse{
		Cid: id.String(),
	}, nil
}
