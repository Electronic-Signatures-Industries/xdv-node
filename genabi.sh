protoc \
  --plugin="./node_modules/.bin/protoc-gen-ts_proto" \
  --ts_proto_out="./provider/protolib" \
  --proto_path="./proto" \
  --proto_path="./proto/cosmos/cosmos-sdk/proto/cosmos/base/query/v1beta1" \
  --proto_path="./proto/cosmos/cosmos-sdk/third_party/proto" \
  --ts_proto_opt="esModuleInterop=true,forceLong=long,useOptionals=true" \
  "./proto/xdvnode/documents.proto" \
  "./proto/xdvnode/file.proto" \
  "./proto/xdvnode/tx.proto" \
  "./proto/xdvnode/genesis.proto" \
  "./proto/xdvnode/query.proto"