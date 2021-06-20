package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateFile{}

func NewMsgCreateFile(creator string, data []byte, contentType string) *MsgCreateFile {
	return &MsgCreateFile{
		Creator:     creator,
		Data:        data,
		ContentType: contentType,
	}
}

func (msg *MsgCreateFile) Route() string {
	return RouterKey
}

func (msg *MsgCreateFile) Type() string {
	return "CreateFile"
}

func (msg *MsgCreateFile) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateFile) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateFile) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
