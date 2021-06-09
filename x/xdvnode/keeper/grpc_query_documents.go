package keeper

import (
	"context"

	"github.com/Electronic-Signatures-Industries/xdv-node/x/xdvnode/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) DocumentsAll(c context.Context, req *types.QueryAllDocumentsRequest) (*types.QueryAllDocumentsResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var documentss []*types.Documents
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	documentsStore := prefix.NewStore(store, types.KeyPrefix(types.DocumentsKey))

	pageRes, err := query.Paginate(documentsStore, req.Pagination, func(key []byte, value []byte) error {
		var documents types.Documents
		if err := k.cdc.UnmarshalBinaryBare(value, &documents); err != nil {
			return err
		}

		documentss = append(documentss, &documents)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllDocumentsResponse{Documents: documentss, Pagination: pageRes}, nil
}

func (k Keeper) Documents(c context.Context, req *types.QueryGetDocumentsRequest) (*types.QueryGetDocumentsResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var documents types.Documents
	ctx := sdk.UnwrapSDKContext(c)

	if !k.HasDocuments(ctx, req.Id) {
		return nil, sdkerrors.ErrKeyNotFound
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DocumentsKey))
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetDocumentsIDBytes(req.Id)), &documents)

	return &types.QueryGetDocumentsResponse{Documents: &documents}, nil
}
