package keeper

import (
	"bytes"
	"encoding/binary"
	"fmt"
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

func (store *Memory) beInitialized() {
	if store.Bag != nil {
		return
	}
	store.Bag = make(map[ipld.Link][]byte)
}

func (store *Memory) OpenRead(lnkCtx ipld.LinkContext, lnk ipld.Link) (io.Reader, error) {
	store.beInitialized()
	data, exists := store.Bag[lnk]
	if !exists {
		return nil, fmt.Errorf("404") // FIXME this needs a standard error type
	}
	return bytes.NewReader(data), nil
}



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

func (k Keeper) AppendIPLD(
	ctx sdk.Context,
	documents types.Documents,
) uint64 {

		// Create the documents
		count := k.GetDocumentsCount(ctx)
	
		// Set the ID of the appended value
		 documents.Id = count
	
	// Let's get a LinkSystem.  We're going to be working with CID links,
	//  so let's get the default LinkSystem that's ready to work with those.
	lsys := cidlink.DefaultLinkSystem()

	// We want to store the serialized data somewhere.
	//  We'll use an in-memory store for this.  (It's a package scoped variable.)
	//  You can use any kind of storage system here;
	//   you just need a function that conforms to the ipld.BlockWriteOpener interface.
	lsys.StorageWriteOpener = func (lnkCtx ipld.LinkContext) (io.Writer, ipld.BlockWriteCommitter, error) {
		store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DocumentsKey))
		
		// TODO: Here
		buf := bytes.Buffer{}
		return &buf, func(lnk ipld.Link) error {
			appendedValue := k.cdc.MustMarshalBinaryBare(&documents)
			store.Set(GetDocumentsIDBytes(documents.Id), appendedValue)
			return nil
		}, nil
	}
	
	lp := cidlink.LinkPrototype{cid.Prefix{
		Version:  1,    // Usually '1'.
		Codec:    0x71, // 0x71 means "dag-cbor" -- See the multicodecs table: https://github.com/multiformats/multicodec/
		MhType:   0x13, // 0x20 means "sha2-512" -- See the multicodecs table: https://github.com/multiformats/multicodec/
		MhLength: 64,   // sha2-512 hash has a 64-byte sum.
	}}

	// TODO: Add Document 
	n := fluent.MustBuildMap(basicnode.Prototype.Map, 1, func(na fluent.MapAssembler) {
		na.AssembleEntry("hello").AssignString("world")
	})
		
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
	
		return &buf, func(lnk ipld.Link) error {
			store.Bag[lnk] = buf.Bytes()
			return nil
		}, nil
	}

	// To create any links, first we need a LinkPrototype.
	// This gathers together any parameters that might be needed when making a link.
	// (For CIDs, the version, the codec, and the multihash type are all parameters we'll need.)
	// Often, you can probably make this a constant for your whole application.
	lp := cidlink.LinkPrototype{cid.Prefix{
		Version:  1,    // Usually '1'.
		Codec:    0x71, // 0x71 means "dag-cbor" -- See the multicodecs table: https://github.com/multiformats/multicodec/
		MhType:   0x13, // 0x20 means "sha2-512" -- See the multicodecs table: https://github.com/multiformats/multicodec/
		MhLength: 64,   // sha2-512 hash has a 64-byte sum.
	}}

	// And we need some data to link to!  Here's a quick piece of example data:
	n := fluent.MustBuildMap(basicnode.Prototype.Map, 1, func(na fluent.MapAssembler) {
		na.AssembleEntry("hello").AssignString("world")
	})

	// Before we use the LinkService, NOTE:
	//  There's a side-effecting import at the top of the file.  It's for the dag-cbor codec.
	//  The CID LinkSystem defaults use a global registry called the multicodec table;
	//  and the multicodec table is populated in part by the dag-cbor package when it's first imported.
	// You'll need that side-effecting import, too, to copy this example.
	//  It can happen anywhere in your program; once, in any package, is enough.
	//  If you don't have this import, the codec will not be registered in the multicodec registry,
	//  and when you use the LinkSystem we got from the cidlink package, it will return an error of type ErrLinkingSetup.
	// If you initialize a custom LinkSystem, you can control this more directly;
	//  these registry systems are only here as defaults.

	// Now: time to apply the LinkSystem, and do the actual store operation!
	lnk, err := lsys.Store(
		ipld.LinkContext{}, // The zero value is fine.  Configure it it you want cancellability or other features.
		lp,                 // The LinkPrototype says what codec and hashing to use.
		n,                  // And here's our data.
	)
	if err != nil {
		panic(err)
	}
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
