package keeper

import (
	"bytes"
	"context"

	"github.com/Electronic-Signatures-Industries/xdv-node/x/xdvnode/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/ipfs/go-cid"
	"github.com/ipld/go-ipld-prime/codec/dagcbor"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) FileAll(c context.Context, req *types.QueryAllFileRequest) (*types.QueryAllFileResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var files []*types.File
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	fileStore := prefix.NewStore(store, types.KeyPrefix(types.FileKey))

	pageRes, err := query.Paginate(fileStore, req.Pagination, func(key []byte, value []byte) error {
		var file types.File
		if err := k.cdc.UnmarshalBinaryBare(value, &file); err != nil {
			return err
		}

		files = append(files, &file)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllFileResponse{File: files, Pagination: pageRes}, nil
}

func (k Keeper) File(c context.Context, req *types.QueryGetFileRequest) (*types.QueryGetFileResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var file types.File
	ctx := sdk.UnwrapSDKContext(c)

	if !k.HasFile(ctx, req.Cid) {
		return nil, sdkerrors.ErrKeyNotFound
	}

	file = k.GetFile(ctx, req.Cid)
	parsecid, _ := cid.Parse(req.Cid)
	n := k.GetObject(ctx, parsecid)

	var buf bytes.Buffer
	if parsecid.Prefix().Codec == 0x71 {
		// dag-cbor
		dagcbor.Encode(n, &buf)
		file.Data = buf.Bytes()
	}

	return &types.QueryGetFileResponse{File: &file}, nil
}
