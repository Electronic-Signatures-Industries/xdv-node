package keeper

import (
	"bytes"
	"encoding/binary"
	"io"
	"strconv"

	// This package is needed so that all the preloaded plugins are loaded automatically

	mh "github.com/multiformats/go-multihash"

	icore "github.com/ipfs/interface-go-ipfs-core"
	_ "github.com/ipld/go-ipld-prime/codec/dagcbor"

	"github.com/Electronic-Signatures-Industries/xdv-node/x/xdvnode/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/ipfs/go-cid"
	opt "github.com/ipfs/interface-go-ipfs-core/options"
	"github.com/ipld/go-ipld-prime"
	"github.com/ipld/go-ipld-prime/fluent"
	cidlink "github.com/ipld/go-ipld-prime/linking/cid"
	basicnode "github.com/ipld/go-ipld-prime/node/basic"
)

// GetFileCount get the total number of file
func (k Keeper) GetFileCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.FileCountKey))
	byteKey := types.KeyPrefix(types.FileCountKey)
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

// SetFileCount set the total number of file
func (k Keeper) SetFileCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.FileCountKey))
	byteKey := types.KeyPrefix(types.FileCountKey)
	bz := []byte(strconv.FormatUint(count, 10))
	store.Set(byteKey, bz)
}

// AppendFile appends a file in the store with a new id and update the count
func (k Keeper) AppendFile(
	ctx sdk.Context,
	file types.File,
) (ipld.Link, uint64) {

	// Create the file
	count := k.GetFileCount(ctx)

	// Set the ID of the appended value
	file.Id = count

	var lnk ipld.Link
	if file.GetStorageNetworkType() == "ipfs" {
		lnk = k.StoreAsIPFS(ctx, file)
	} else {
		lnk = k.StoreAsXDV(ctx, file)
	}

	// Update documents count
	k.SetFileCount(ctx, count+1)

	return lnk, count
}

func (k Keeper) StoreAsIPFS(
	ctx sdk.Context,
	file types.File,
) ipld.Link {
	key := "ipfs"
	c := ctx.Context()
	ipfs := c.Value(key).(icore.CoreAPI)

	lnk, err := ipfs.Block().Put(ctx.Context(), bytes.NewReader(file.GetData()),
		opt.Block.Format("cbor"), opt.Block.Hash(mh.SHA2_256, -1))
	if err != nil {
		ctx.Logger().Info(err.Error())
		return nil
	}

	// err = res.Emit(&BlockStat{
	// 	Key:  p.Path().Cid().String(),
	// 	Size: p.Size(),
	// })

	// lp := cidlink.LinkPrototype{cid.Prefix{
	// 	Version:  1,
	// 	Codec:    0x71, // dag-cbor
	// 	MhType:   0x13, // sha2-512
	// 	MhLength: 64,   // sha2-512 hash has a 64-byte sum.
	// }}

	return cidlink.Link{Cid: lnk.Path().Cid()}
}

func (k Keeper) StoreAsXDV(
	ctx sdk.Context,
	file types.File,
) ipld.Link {
	lsys := cidlink.DefaultLinkSystem()

	//   you just need a function that conforms to the ipld.BlockWriteOpener interface.
	lsys.StorageWriteOpener = func(lnkCtx ipld.LinkContext) (io.Writer, ipld.BlockWriteCommitter, error) {
		// change prefix
		buf := bytes.Buffer{}
		return &buf, func(lnk ipld.Link) error {
			store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.FileIPLDKey))
			f := types.File{
				Data:               buf.Bytes(),
				Creator:            file.Creator,
				ContentType:        file.ContentType,
				Id:                 file.Id,
				Cid:                lnk.String(),
				StorageNetworkType: "xdv",
			}
			value := k.cdc.MustMarshalBinaryBare(&f)
			store.Set(GetFileCIDBytes(lnk.String()), value)
			return nil
		}, nil
	}

	// Add Document
	// Basic Node
	n := fluent.MustBuildMap(basicnode.Prototype.Map, 1, func(na fluent.MapAssembler) {
		na.AssembleEntry("index").AssignBytes(file.Data)
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
	k.Logger(ctx).Info("ipld******************", lnk)
	return lnk
}

// SetFile set a specific file in the store
func (k Keeper) SetFile(ctx sdk.Context, file types.File) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.FileIPLDKey))
	b := k.cdc.MustMarshalBinaryBare(&file)
	store.Set(GetFileCIDBytes(file.Cid), b)
}

// GetFile returns a file from its id
func (k Keeper) GetFile(ctx sdk.Context, cid string) types.File {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.FileIPLDKey))
	var file types.File
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetFileCIDBytes(cid)), &file)
	return file
}

func (k *Keeper) GetObject(ctx sdk.Context, cid cid.Cid) ipld.Node {
	// Let's say we want to load this link (it's the same one we just created in the example above).
	// cid, _ := cid.Decode("bafyrgqhai26anf3i7pips7q22coa4sz2fr4gk4q4sqdtymvvjyginfzaqewveaeqdh524nsktaq43j65v22xxrybrtertmcfxufdam3da3hbk")
	lnk := cidlink.Link{Cid: cid}

	// Let's get a LinkSystem.  We're going to be working with CID links,
	//  so let's get the default LinkSystem that's ready to work with those.
	// (This is the same as we did in ExampleStoringLink.)
	lsys := cidlink.DefaultLinkSystem()

	// We need somewhere to go looking for any of the data we might want to load!
	//  We'll use an in-memory store for this.  (It's a package scoped variable.)
	//   (This particular memory store was filled with the data we'll load earlier, during ExampleStoringLink.)
	//  You can use any kind of storage system here;
	//   you just need a function that conforms to the ipld.BlockReadOpener interface.
	lsys.StorageReadOpener = func(lnkCtx ipld.LinkContext, lnk ipld.Link) (io.Reader, error) {
		file := k.GetFile(ctx, lnk.String())
		return bytes.NewReader(file.Data), nil
	}

	// We'll need to decide what in-memory implementation of ipld.Node we want to use.
	//  Here, we'll use the "basicnode" implementation.  This is a good getting-started choice.
	//   But you could also use other implementations, or even a code-generated type with special features!
	np := basicnode.Prototype.Any

	// Before we use the LinkService, NOTE:
	//  There's a side-effecting import at the top of the file.  It's for the dag-cbor codec.
	//  See the comments in ExampleStoringLink for more discussion of this and why it's important.

	lsys.TrustedStorage = true

	// Choose all the parts.
	decoder, err := lsys.DecoderChooser(lnk)
	if err != nil {
		ctx.Logger().Error("could not choose a decoder", err)
	}
	if lsys.StorageReadOpener == nil {
		ctx.Logger().Error("no storage configured for reading", io.ErrClosedPipe)
	}
	// Open storage, read it, verify it, and feed the codec to assemble the nodes.
	// TrustaedStorage indicates the data coming out of this reader has already been hashed and verified earlier.
	// As a result, we can skip rehashing it
	file := k.GetFile(ctx, lnk.String())
	//	var n ipld.Node
	nb := np.NewBuilder()
	if lsys.TrustedStorage {
		decoder(nb, bytes.NewReader(file.Data))
	}
	n := nb.Build()

	// Apply the LinkSystem, and ask it to load our link!
	// n, err := lsys.Load(
	// 	ipld.LinkContext{
	// 		Ctx: ctx.Context(),
	// 	}, // The zero value is fine.  Configure it it you want cancellability or other features.
	// 	lnk, // The Link we want to load!
	// 	np,  // The NodePrototype says what kind of Node we want as a result.
	// )

	// k.Logger(ctx).Error("we loaded a %s with %d entries\n", n.Kind(), n.Length())

	// if err != nil {
	// 	panic(err)
	// }

	// Tada!  We have the data as node that we can traverse and use as desired.

	// Output:
	// we loaded a map with 1 entries
	return n
}

// HasFile checks if the file exists in the store
func (k Keeper) HasFile(ctx sdk.Context, cid string) bool {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.FileIPLDKey))
	return store.Has(GetFileCIDBytes(cid))
}

// GetFileOwner returns the creator of the file
func (k Keeper) GetFileOwner(ctx sdk.Context, cid string) string {
	return k.GetFile(ctx, cid).Creator
}

// RemoveFile removes a file from the store
func (k Keeper) RemoveFile(ctx sdk.Context, cid string) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.FileIPLDKey))
	store.Delete(GetFileCIDBytes(cid))
}

// GetAllFile returns all file
func (k Keeper) GetAllFile(ctx sdk.Context) (list []types.File) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.FileIPLDKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.File
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetFileCIDBytes returns the byte representation of the CID
func GetFileCIDBytes(cid string) []byte {
	bz := []byte(cid)
	return bz
}

// GetFileIDBytes returns the byte representation of the ID
func GetFileIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetFileIDFromBytes returns ID in uint64 format from a byte array
func GetFileIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
