package keeper

import (
	"context"
	"fmt"

	"github.com/Electronic-Signatures-Industries/xdv-node/x/xdvnode/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateDocuments(goCtx context.Context, msg *types.MsgCreateDocuments) (*types.MsgCreateDocumentsResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var documents = types.Documents{
		Creator:      msg.Creator,
		Name:         msg.Name,
		Hash:         msg.Hash,
		LastModified: msg.LastModified,
	}

	id := k.AppendDocuments(
		ctx,
		documents,
	)

	return &types.MsgCreateDocumentsResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateDocuments(goCtx context.Context, msg *types.MsgUpdateDocuments) (*types.MsgUpdateDocumentsResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var documents = types.Documents{
		Creator: msg.Creator,
		Id:      msg.Id,
		Name:    msg.Name,
	}

	// Checks that the element exists
	if !k.HasDocuments(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the the msg sender is the same as the current owner
	if msg.Creator != k.GetDocumentsOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetDocuments(ctx, documents)

	return &types.MsgUpdateDocumentsResponse{}, nil
}

func (k msgServer) DeleteDocuments(goCtx context.Context, msg *types.MsgDeleteDocuments) (*types.MsgDeleteDocumentsResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	if !k.HasDocuments(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}
	if msg.Creator != k.GetDocumentsOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveDocuments(ctx, msg.Id)

	return &types.MsgDeleteDocumentsResponse{}, nil
}
