module github.com/Electronic-Signatures-Industries/xdv-node

go 1.16

require (
	github.com/CosmWasm/wasmd v0.16.0
	github.com/cosmos/cosmos-sdk v0.42.4
	github.com/gogo/protobuf v1.3.3
	github.com/golang-jwt/jwt v3.2.1+incompatible
	github.com/golang/protobuf v1.5.2
	github.com/gopherjs/gopherjs v0.0.0-20190812055157-5d271430af9f // indirect
	github.com/gorilla/mux v1.8.0
	github.com/grpc-ecosystem/grpc-gateway v1.16.0
	github.com/ipfs/go-cid v0.2.0
	github.com/ipfs/go-ipfs v0.13.1
	github.com/ipfs/go-ipfs-config v0.14.0
	github.com/ipfs/interface-go-ipfs-core v0.7.0
	github.com/ipld/go-ipld-prime v0.16.0
	github.com/irisnet/irismod v1.4.0
	github.com/libp2p/go-libp2p-core v0.15.1
	github.com/libp2p/go-libp2p-peerstore v0.6.0
	github.com/multiformats/go-multiaddr v0.5.0
	github.com/multiformats/go-multihash v0.1.0
	github.com/prometheus/client_golang v1.12.1
	github.com/regen-network/cosmos-proto v0.3.1
	github.com/smartystreets/assertions v1.0.1 // indirect
	github.com/spf13/cast v1.3.1
	github.com/spf13/cobra v1.1.3
	github.com/spf13/pflag v1.0.5
	github.com/stretchr/testify v1.7.1
	github.com/tendermint/spm v0.0.0-20210524110815-6d7452d2dc4a
	github.com/tendermint/tendermint v0.34.10
	github.com/tendermint/tm-db v0.6.4
	github.com/tidwall/gjson v1.14.0
	google.golang.org/genproto v0.0.0-20211118181313-81c1377c94b1
	google.golang.org/grpc v1.46.0
	gopkg.in/yaml.v2 v2.4.0
)

replace google.golang.org/grpc => google.golang.org/grpc v1.33.2

replace github.com/gogo/protobuf => github.com/regen-network/protobuf v1.3.3-alpha.regen.1
