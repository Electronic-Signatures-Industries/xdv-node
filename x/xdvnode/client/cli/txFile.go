package cli

import (
	"github.com/spf13/cobra"

	"github.com/spf13/cast"

	"github.com/Electronic-Signatures-Industries/xdv-node/x/xdvnode/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
)

func CmdCreateFile() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-file [data] [content_type]",
		Short: "Create a new file",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) error {
			argsData, err := cast.ToStringE(args[0])
			if err != nil {
				return err
			}
			argsContent_type, err := cast.ToStringE(args[1])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateFile(clientCtx.GetFromAddress().String(),
				([]byte(argsData)), argsContent_type)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
