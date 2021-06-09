package keeper

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"

	"github.com/Electronic-Signatures-Industries/xdv-node/x/xdvnode/types"
)

func TestDocumentsMsgServerCreate(t *testing.T) {
	srv, ctx := setupMsgServer(t)
	creator := "A"
	for i := 0; i < 5; i++ {
		resp, err := srv.CreateDocuments(ctx, &types.MsgCreateDocuments{Creator: creator})
		require.NoError(t, err)
		assert.Equal(t, i, int(resp.Id))
	}
}

func TestDocumentsMsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateDocuments
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgUpdateDocuments{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateDocuments{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateDocuments{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		tc := tc
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)
			_, err := srv.CreateDocuments(ctx, &types.MsgCreateDocuments{Creator: creator})
			require.NoError(t, err)

			_, err = srv.UpdateDocuments(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}

func TestDocumentsMsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteDocuments
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgDeleteDocuments{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgDeleteDocuments{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "KeyNotFound",
			request: &types.MsgDeleteDocuments{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		tc := tc
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)

			_, err := srv.CreateDocuments(ctx, &types.MsgCreateDocuments{Creator: creator})
			require.NoError(t, err)
			_, err = srv.DeleteDocuments(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}
