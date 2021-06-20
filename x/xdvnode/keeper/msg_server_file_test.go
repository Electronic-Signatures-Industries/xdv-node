package keeper

import (
	"testing"

	"github.com/stretchr/testify/require"

	"github.com/Electronic-Signatures-Industries/xdv-node/x/xdvnode/types"
)

func TestFileMsgServerCreate(t *testing.T) {
	srv, ctx := setupMsgServer(t)
	creator := "A"
	for i := 0; i < 5; i++ {
		_, err := srv.CreateFile(ctx, &types.MsgCreateFile{Creator: creator})
		require.NoError(t, err)
	}
}
