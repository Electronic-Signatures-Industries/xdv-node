package keeper

import (
	"testing"

	"github.com/Electronic-Signatures-Industries/xdv-node/x/xdvnode/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/assert"
)

func createNDocuments(keeper *Keeper, ctx sdk.Context, n int) []types.Documents {
	items := make([]types.Documents, n)
	for i := range items {
		items[i].Creator = "any"
		items[i].Id = keeper.AppendDocuments(ctx, items[i])
	}
	return items
}

func TestDocumentsGet(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNDocuments(keeper, ctx, 10)
	for _, item := range items {
		assert.Equal(t, item, keeper.GetDocuments(ctx, item.Id))
	}
}

func TestDocumentsExist(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNDocuments(keeper, ctx, 10)
	for _, item := range items {
		assert.True(t, keeper.HasDocuments(ctx, item.Id))
	}
}

func TestDocumentsRemove(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNDocuments(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveDocuments(ctx, item.Id)
		assert.False(t, keeper.HasDocuments(ctx, item.Id))
	}
}

func TestDocumentsGetAll(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNDocuments(keeper, ctx, 10)
	assert.Equal(t, items, keeper.GetAllDocuments(ctx))
}

func TestDocumentsCount(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNDocuments(keeper, ctx, 10)
	count := uint64(len(items))
	assert.Equal(t, count, keeper.GetDocumentsCount(ctx))
}
