package keeper

import (
	"testing"

	"github.com/Electronic-Signatures-Industries/xdv-node/x/xdvnode/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/ipfs/go-cid"
	"github.com/stretchr/testify/assert"
)

func createNFile(keeper *Keeper, ctx sdk.Context, n int) []types.File {
	items := make([]types.File, n)
	for i := range items {
		items[i].Creator = "any"
		items[i].Data = ([]byte("Hello World"))
		items[i].ContentType = "application/octet-stream"
		_, items[i].Id = keeper.AppendFile(ctx, items[i])
	}
	return items
}

func TestIPLD(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	f := make([]types.File, 1)
	f[0].Creator = "rogelio"
	f[0].Data = ([]byte("Hello World"))
	f[0].ContentType = "application/octet-stream"
	f[0].Id = 1
	lnk, _ := keeper.AppendFile(ctx, f[0])
	cid, _ := cid.Decode(lnk.String())

	n := keeper.GetObject(ctx, cid)
	assert.Equal(t, n.Length(), 1)
}

// func TestFileGet(t *testing.T) {
// 	keeper, ctx := setupKeeper(t)
// 	items := createNFile(keeper, ctx, 10)
// 	for _, item := range items {
// 		assert.Equal(t, item, keeper.GetFile(ctx, item.Cid))
// 	}
// }

// func TestFileExist(t *testing.T) {
// 	keeper, ctx := setupKeeper(t)
// 	items := createNFile(keeper, ctx, 10)
// 	for _, item := range items {
// 		assert.True(t, keeper.HasFile(ctx, item.Cid))
// 	}
// }

// func TestFileRemove(t *testing.T) {
// 	keeper, ctx := setupKeeper(t)
// 	items := createNFile(keeper, ctx, 10)
// 	for _, item := range items {
// 		keeper.RemoveFile(ctx, item.Id)
// 		assert.False(t, keeper.HasFile(ctx, item.Id))
// 	}
// }

// func TestFileGetAll(t *testing.T) {
// 	keeper, ctx := setupKeeper(t)
// 	items := createNFile(keeper, ctx, 10)
// 	assert.Equal(t, items, keeper.GetAllFile(ctx))
// }

// func TestFileCount(t *testing.T) {
// 	keeper, ctx := setupKeeper(t)
// 	items := createNFile(keeper, ctx, 10)
// 	count := uint64(len(items))
// 	assert.Equal(t, count, keeper.GetFileCount(ctx))
// }
