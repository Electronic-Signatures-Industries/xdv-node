package xdvnode

import (
	"github.com/Electronic-Signatures-Industries/xdv-node/x/xdvnode/keeper"
	"github.com/Electronic-Signatures-Industries/xdv-node/x/xdvnode/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// this line is used by starport scaffolding # genesis/module/init
	// Set all the file
	for _, elem := range genState.FileList {
		k.SetFile(ctx, *elem)
	}

	// Set file count
	k.SetFileCount(ctx, genState.FileCount)

	// Set all the documents
	for _, elem := range genState.DocumentsList {
		k.SetDocuments(ctx, *elem)
	}

	// Set documents count
	k.SetDocumentsCount(ctx, genState.DocumentsCount)

	// this line is used by starport scaffolding # ibc/genesis/init
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()

	// this line is used by starport scaffolding # genesis/module/export
	// Get all file
	fileList := k.GetAllFile(ctx)
	for _, elem := range fileList {
		elem := elem
		genesis.FileList = append(genesis.FileList, &elem)
	}

	// Set the current count
	genesis.FileCount = k.GetFileCount(ctx)

	// Get all documents
	documentsList := k.GetAllDocuments(ctx)
	for _, elem := range documentsList {
		elem := elem
		genesis.DocumentsList = append(genesis.DocumentsList, &elem)
	}

	// Set the current count
	genesis.DocumentsCount = k.GetDocumentsCount(ctx)

	// this line is used by starport scaffolding # ibc/genesis/export

	return genesis
}
