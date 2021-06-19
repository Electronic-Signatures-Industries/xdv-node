package cli

import (
	"strconv"

	"github.com/spf13/cobra"

	"github.com/spf13/cast"

	"github.com/Electronic-Signatures-Industries/xdv-node/x/xdvnode/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
)

func CmdCreateDocuments() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-documents [name] [hash] [last_modified] [content_type] [sig] [net] [did] [pinned] [tokenized]",
		Short: "Create a new documents",
		Args:  cobra.ExactArgs(9),
		RunE: func(cmd *cobra.Command, args []string) error {

			argsName, err := cast.ToStringE(args[0])
			if err != nil {
				return err
			}
			argsHash, err := cast.ToStringE(args[1])
			if err != nil {
				return err
			}
			argsLastModified, err := cast.ToUint64E(args[2])
			if err != nil {
				return err
			}
			argsContentType, err := cast.ToStringE(args[3])
			if err != nil {
				return err
			}
			argsSignature, err := cast.ToStringE(args[4])
			if err != nil {
				return err
			}

			argsNetwork, err := cast.ToStringE(args[5])
			if err != nil {
				return err
			}

			argsDid, err := cast.ToStringE(args[6])
			if err != nil {
				return err
			}

			argsAlg, err := cast.ToStringE(args[7])
			if err != nil {
				return err
			}

			argsPinned, err := cast.ToBoolE(args[8])
			if err != nil {
				return err
			}

			argsTokenized, err := cast.ToBoolE(args[9])
			if err != nil {
				return err
			}
			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateDocuments(
				clientCtx.GetFromAddress().String(), argsName,
				argsHash,
				argsLastModified, argsContentType,
				argsSignature, argsNetwork, argsDid, argsAlg, argsPinned, argsTokenized)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdUpdateDocuments() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-documents [id] [name]",
		Short: "Update a documents",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) error {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			argsName, err := cast.ToStringE(args[1])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateDocuments(clientCtx.GetFromAddress().String(), id, argsName)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdDeleteDocuments() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-documents [id]",
		Short: "Delete a documents by id",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDeleteDocuments(clientCtx.GetFromAddress().String(), id)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
