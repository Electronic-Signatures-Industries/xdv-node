package keeper

import (
	"fmt"

	"github.com/tendermint/tendermint/libs/log"

	"github.com/Electronic-Signatures-Industries/xdv-node/x/xdvnode/types"
	"github.com/cosmos/cosmos-sdk/codec"
	sdk "github.com/cosmos/cosmos-sdk/types"

	// this line is used by starport scaffolding # ibc/keeper/import
	authkeeper "github.com/cosmos/cosmos-sdk/x/auth/keeper"
	bankkeeper "github.com/cosmos/cosmos-sdk/x/bank/keeper"
)

type (
	Keeper struct {
		cdc      codec.Marshaler
		storeKey sdk.StoreKey
		memKey   sdk.StoreKey
		// this line is used by starport scaffolding # ibc/keeper/attribute
		account authkeeper.AccountKeeper
		bank    bankkeeper.Keeper
	}
)

func NewKeeper(
	cdc codec.Marshaler,
	storeKey,
	memKey sdk.StoreKey,
	// this line is used by starport scaffolding # ibc/keeper/parameter
	accountKeeper authkeeper.AccountKeeper,
	bankKeeper bankkeeper.Keeper,
) *Keeper {
	return &Keeper{
		cdc:      cdc,
		storeKey: storeKey,
		memKey:   memKey,
		// this line is used by starport scaffolding # ibc/keeper/return
		account: accountKeeper,
		bank:    bankKeeper,
	}
}

func (k Keeper) Logger(ctx sdk.Context) log.Logger {
	return ctx.Logger().With("module", fmt.Sprintf("x/%s", types.ModuleName))
}
