package types

import (
	"crypto/rsa"
	"errors"

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
	data := `{
		link: 'bafyreib77wpm5tvgkbr4t4aiiopjyispw76h2trd5yvpzmq6cejdjhcsie',
		payload: 'AXESID_9ns7OplBjyfAIQ56cIk-3_H1OI-4q_LIeERI0nFJB',
		signatures: [
		  {
			protected: 'eyJhbGciOiJSUzI1NiIsImtpZCI6ImRpZDprZXk6ekFIZDdoQ1dXcjgxUlZIZkxYMkNaRFladGNDR2lMQXc5czdyRzRWdjhlQ3g4RERkZiN6QUhkN2hDV1dyODFSVkhmTFgyQ1pEWVp0Y0NHaUxBdzlzN3JHNFZ2OGVDeDhERGRmIn0',
			signature: 'NiQ236iEKLjkJ7zqU4u1GIqsnV0fj9XU3fp8th8lLqCRstn-UtiL-CZE4-WQBPm_N_brRqyCdTiqRcMp3wAybve8MRFzY1d8DEnD8iyxY_ZJOeLr_d9hSKDqLCX80uuxjPk89MExrK19pC36k44kAO1wIYBwCn8iiiIHtkPrYnebJ1iWS5JTd_ZaHMitZ99QCNpmQG3-1BSNXucERr61Mn9VrLgwpQNlCfC_m_QXCsKYhgTo020fDK0aHuAgmMAGKW-s9F9BA-PGvNike_S3KjKiy0dmcWi-J07N7d5hgYXh8l0RChwz_yLFO8o6k0EgEZbFTZdLqeuYM6VHoGWpDQ'
		  }
		]
	  }`
	// tokenString := {protected}{payload}{signature}
	tokenString := "eyJhbGciOiJSUzI1NiIsImtpZCI6ImRpZDprZXk6ekFIZDdoQ1dXcjgxUlZIZkxYMkNaRFladGNDR2lMQXc5czdyRzRWdjhlQ3g4RERkZiN6QUhkN2hDV1dyODFSVkhmTFgyQ1pEWVp0Y0NHaUxBdzlzN3JHNFZ2OGVDeDhERGRmIn0.AXESID_9ns7OplBjyfAIQ56cIk-3_H1OI-4q_LIeERI0nFJB.NiQ236iEKLjkJ7zqU4u1GIqsnV0fj9XU3fp8th8lLqCRstn-UtiL-CZE4-WQBPm_N_brRqyCdTiqRcMp3wAybve8MRFzY1d8DEnD8iyxY_ZJOeLr_d9hSKDqLCX80uuxjPk89MExrK19pC36k44kAO1wIYBwCn8iiiIHtkPrYnebJ1iWS5JTd_ZaHMitZ99QCNpmQG3-1BSNXucERr61Mn9VrLgwpQNlCfC_m_QXCsKYhgTo020fDK0aHuAgmMAGKW-s9F9BA-PGvNike_S3KjKiy0dmcWi-J07N7d5hgYXh8l0RChwz_yLFO8o6k0EgEZbFTZdLqeuYM6VHoGWpDQ"
	// Parse takes the token string and a function for looking up the key. The latter is especially
	// useful if you use multiple keys for your application.  The standard is to use 'kid' in the
	// head of the token to identify which key to use, but the parsed token (head and claims) is pro vided
	// to the callback, providing flexibility.

	token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
		// Don't forget to validate the alg is what you expect:
		if _, ok := token.Method.(*jwt.SigningMethodRSA); !ok {
			return nil, errors.New(jwt.ErrInvalidKeyType.Error())
		}

		var pub *rsa.PublicKey

		return pub, nil
	})

	if token.Valid {
		return nil
	} else {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid JWT Token")
	}

	return nil
}
