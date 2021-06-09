package keeper

import (
	"encoding/binary"
	"github.com/Electronic-Signatures-Industries/xdv-node/x/xdvnode/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"strconv"
)

// GetDocumentsCount get the total number of documents
func (k Keeper) GetDocumentsCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DocumentsCountKey))
	byteKey := types.KeyPrefix(types.DocumentsCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	count, err := strconv.ParseUint(string(bz), 10, 64)
	if err != nil {
		// Panic because the count should be always formattable to iint64
		panic("cannot decode count")
	}

	return count
}

// SetDocumentsCount set the total number of documents
func (k Keeper) SetDocumentsCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DocumentsCountKey))
	byteKey := types.KeyPrefix(types.DocumentsCountKey)
	bz := []byte(strconv.FormatUint(count, 10))
	store.Set(byteKey, bz)
}

// AppendDocuments appends a documents in the store with a new id and update the count
func (k Keeper) AppendDocuments(
	ctx sdk.Context,
	documents types.Documents,
) uint64 {
	// Create the documents
	count := k.GetDocumentsCount(ctx)

	// Set the ID of the appended value
	documents.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DocumentsKey))
	appendedValue := k.cdc.MustMarshalBinaryBare(&documents)
	store.Set(GetDocumentsIDBytes(documents.Id), appendedValue)

	// Update documents count
	k.SetDocumentsCount(ctx, count+1)

	return count
}

// SetDocuments set a specific documents in the store
func (k Keeper) SetDocuments(ctx sdk.Context, documents types.Documents) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DocumentsKey))
	b := k.cdc.MustMarshalBinaryBare(&documents)
	store.Set(GetDocumentsIDBytes(documents.Id), b)
}

// GetDocuments returns a documents from its id
func (k Keeper) GetDocuments(ctx sdk.Context, id uint64) types.Documents {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DocumentsKey))
	var documents types.Documents
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetDocumentsIDBytes(id)), &documents)
	return documents
}

// HasDocuments checks if the documents exists in the store
func (k Keeper) HasDocuments(ctx sdk.Context, id uint64) bool {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DocumentsKey))
	return store.Has(GetDocumentsIDBytes(id))
}

// GetDocumentsOwner returns the creator of the documents
func (k Keeper) GetDocumentsOwner(ctx sdk.Context, id uint64) string {
	return k.GetDocuments(ctx, id).Creator
}

// RemoveDocuments removes a documents from the store
func (k Keeper) RemoveDocuments(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DocumentsKey))
	store.Delete(GetDocumentsIDBytes(id))
}

// GetAllDocuments returns all documents
func (k Keeper) GetAllDocuments(ctx sdk.Context) (list []types.Documents) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DocumentsKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Documents
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetDocumentsIDBytes returns the byte representation of the ID
func GetDocumentsIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetDocumentsIDFromBytes returns ID in uint64 format from a byte array
func GetDocumentsIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
