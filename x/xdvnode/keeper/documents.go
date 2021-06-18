package keeper

import (
	"bytes"
	"encoding/binary"
	"io"
	"strconv"

	"github.com/Electronic-Signatures-Industries/xdv-node/x/xdvnode/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"

	"github.com/ipfs/go-cid"

	"github.com/ipld/go-ipld-prime"
	_ "github.com/ipld/go-ipld-prime/codec/dagcbor"
	"github.com/ipld/go-ipld-prime/fluent"
	cidlink "github.com/ipld/go-ipld-prime/linking/cid"
	basicnode "github.com/ipld/go-ipld-prime/node/basic"
)

// func (store *Memory) beInitialized() {
// 	if store.Bag != nil {
// 		return
// 	}
// 	store.Bag = make(map[ipld.Link][]byte)
// }

// func (store *Memory) OpenRead(lnkCtx ipld.LinkContext, lnk ipld.Link) (io.Reader, error) {
// 	store.beInitialized()
// 	data, exists := store.Bag[lnk]
// 	if !exists {
// 		return nil, fmt.Errorf("404") // FIXME this needs a standard error type
// 	}
// 	return bytes.NewReader(data), nil
// }

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

// Any Dapp
// js client (kind: XDV)   ---> IPLD message (REST/gRPC) ---> IPLD Aware IP with Custom Storage
// js client (kind: IPFS)   ---> IPLD message (REST/gRPC) ---> IPLD Aware IP with IPFS Storage
// js client (kind: Swarm)   ---> IPLD message (REST/gRPC) ---> IPLD Aware IP with Swarm Storage
// { ...message, parent: { link: xdvCid }, sibling: { link: ipfsCid } }
// NFT, FE, Firmas, VC, DID, Smart Agreements, GDPR, SSI

func (k Keeper) AppendIPLD(
	ctx sdk.Context,
	documents types.Documents,
) ipld.Link {

	// Create the documents
	count := k.GetDocumentsCount(ctx)

	// Set the ID of the appended value
	documents.Id = count

	// Let's get a LinkSystem.  We're going to be working with CID links,
	//  so let's get the default LinkSystem that's ready to work with those.
	lsys := cidlink.DefaultLinkSystem()

	//   you just need a function that conforms to the ipld.BlockWriteOpener interface.
	lsys.StorageWriteOpener = func(lnkCtx ipld.LinkContext) (io.Writer, ipld.BlockWriteCommitter, error) {
		store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DocumentsKey))
		buf := bytes.Buffer{}
		return &buf, func(lnk ipld.Link) error {
			node, _ := lnkCtx.LinkNode.AsBytes()
			store.Set(GetDocumentsIDBytes(documents.Id), node)
			return nil
		}, nil
	}

	// Add Document
	// Basic Node
	n := fluent.MustBuildMap(basicnode.Prototype.Map, 1, func(na fluent.MapAssembler) {
		appendedValue := k.cdc.MustMarshalJSON(&documents)
		na.AssembleEntry("index").AssignBytes(appendedValue)
	})

	lp := cidlink.LinkPrototype{cid.Prefix{
		Version:  1,
		Codec:    0x71, // dag-cbor
		MhType:   0x13, // sha2-512
		MhLength: 64,   // sha2-512 hash has a 64-byte sum.
	}}

	lnk, err := lsys.Store(
		ipld.LinkContext{}, // The zero value is fine.  Configure it it you want cancellability or other features.
		lp,                 // The LinkPrototype says what codec and hashing to use.
		n,                  // And here's our data.
	)
	if err != nil {
		panic(err)
	}

	// Update documents count
	k.SetDocumentsCount(ctx, count+1)

	return lnk
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
