package types

import (
	"crypto/rsa"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/golang-jwt/jwt"
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

var _ sdk.Msg = &MsgPutBlock{}

func NewMsgPutBlock(creator string, data []byte, contentType string) *MsgPutBlock {
	return &MsgPutBlock{
		Creator:     creator,
		Data:        data,
		ContentType: contentType,
	}
}

func (msg *MsgPutBlock) Route() string {
	return RouterKey
}

func (msg *MsgPutBlock) Type() string {
	return "PutBlock"
}

func (msg *MsgPutBlock) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgPutBlock) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgPutBlock) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	// sample token string taken from the New example
	tokenString := "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJuYmYiOjE0NDQ0Nzg0MDB9.u1riaD1rW97opCoAuRCTy4w58Br-Zk-bh7vLiRIsrpU"
	// Parse takes the token string and a function for looking up the key. The latter is especially
	// useful if you use multiple keys for your application.  The standard is to use 'kid' in the
	// head of the token to identify which key to use, but the parsed token (head and claims) is pro vided
	// to the callback, providing flexibility.

	token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
		// Don't forget to validate the alg is what you expect:
		if _, ok := token.Method.(*jwt.SigningMethodRSA); !ok {
			// return sdkerrors.Wrapf("Unexpected signing method: %v", token.Header["alg"])
		}

		var pub *rsa.PublicKey

		return pub, nil
	})

	if _, ok := token.Claims.(jwt.MapClaims); ok && token.Valid {
		//	fmt.Println(claims["foo"], claims["nbf"])
	} else {
		//	fmt.Println(err)
	}

	return nil
}
