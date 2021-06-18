package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateDocuments{}

func NewMsgCreateDocuments(creator string, name string, hash string,
	lastModified uint64, contentType string,
	signature string, network string, did string,
	alg string, pinned bool, tokenized bool) *MsgCreateDocuments {
	return &MsgCreateDocuments{
		Creator:      creator,
		Name:         name,
		Hash:         hash,
		LastModified: lastModified,
		ContentType:  contentType,
		Signature:    signature,
		Network:      network,
		Did:          did,
		Alg:          alg,
		Pinned:       pinned,
		Tokenized:    tokenized,
	}
}

func (msg *MsgCreateDocuments) Route() string {
	return RouterKey
}

func (msg *MsgCreateDocuments) Type() string {
	return "CreateDocuments"
}

func (msg *MsgCreateDocuments) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateDocuments) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateDocuments) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateDocuments{}

func NewMsgUpdateDocuments(creator string, id uint64, name string) *MsgUpdateDocuments {
	return &MsgUpdateDocuments{
		Id:      id,
		Creator: creator,
		Name:    name,
	}
}

func (msg *MsgUpdateDocuments) Route() string {
	return RouterKey
}

func (msg *MsgUpdateDocuments) Type() string {
	return "UpdateDocuments"
}

func (msg *MsgUpdateDocuments) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateDocuments) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateDocuments) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteDocuments{}

func NewMsgDeleteDocuments(creator string, id uint64) *MsgDeleteDocuments {
	return &MsgDeleteDocuments{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteDocuments) Route() string {
	return RouterKey
}

func (msg *MsgDeleteDocuments) Type() string {
	return "DeleteDocuments"
}

func (msg *MsgDeleteDocuments) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteDocuments) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteDocuments) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
