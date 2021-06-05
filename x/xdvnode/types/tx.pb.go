// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: xdvnode/tx.proto

package types

import (
	context "context"
	fmt "fmt"
	grpc1 "github.com/gogo/protobuf/grpc"
	proto "github.com/gogo/protobuf/proto"
	grpc "google.golang.org/grpc"
	math "math"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

func init() { proto.RegisterFile("xdvnode/tx.proto", fileDescriptor_26ae188fdaf19a80) }

var fileDescriptor_26ae188fdaf19a80 = []byte{
	// 155 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x12, 0xa8, 0x48, 0x29, 0xcb,
	0xcb, 0x4f, 0x49, 0xd5, 0x2f, 0xa9, 0xd0, 0x2b, 0x28, 0xca, 0x2f, 0xc9, 0x17, 0xd2, 0x73, 0xcd,
	0x49, 0x4d, 0x2e, 0x29, 0xca, 0xcf, 0xcb, 0x4c, 0x0e, 0xce, 0x4c, 0xcf, 0x4b, 0x2c, 0x29, 0x2d,
	0x4a, 0x2d, 0xf6, 0xcc, 0x4b, 0x29, 0x2d, 0x2e, 0x29, 0xca, 0x4c, 0x2d, 0xd6, 0x83, 0x6a, 0x80,
	0xd1, 0x46, 0xac, 0x5c, 0xcc, 0xbe, 0xc5, 0xe9, 0x4e, 0x71, 0x27, 0x1e, 0xc9, 0x31, 0x5e, 0x78,
	0x24, 0xc7, 0xf8, 0xe0, 0x91, 0x1c, 0xe3, 0x84, 0xc7, 0x72, 0x0c, 0x17, 0x1e, 0xcb, 0x31, 0xdc,
	0x78, 0x2c, 0xc7, 0x10, 0xe5, 0x92, 0x9e, 0x59, 0x92, 0x51, 0x9a, 0xa4, 0x97, 0x9c, 0x9f, 0xab,
	0x8f, 0x30, 0x5b, 0x17, 0x61, 0xb8, 0x2e, 0xc2, 0x74, 0xfd, 0x8a, 0x94, 0x32, 0x5d, 0xb0, 0x7b,
	0x2a, 0xf4, 0xe1, 0x2e, 0xab, 0x2c, 0x48, 0x2d, 0x4e, 0x62, 0x03, 0xbb, 0xce, 0x18, 0x10, 0x00,
	0x00, 0xff, 0xff, 0xbe, 0xc7, 0x6a, 0xb2, 0xb1, 0x00, 0x00, 0x00,
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// MsgClient is the client API for Msg service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type MsgClient interface {
}

type msgClient struct {
	cc grpc1.ClientConn
}

func NewMsgClient(cc grpc1.ClientConn) MsgClient {
	return &msgClient{cc}
}

// MsgServer is the server API for Msg service.
type MsgServer interface {
}

// UnimplementedMsgServer can be embedded to have forward compatible implementations.
type UnimplementedMsgServer struct {
}

func RegisterMsgServer(s grpc1.Server, srv MsgServer) {
	s.RegisterService(&_Msg_serviceDesc, srv)
}

var _Msg_serviceDesc = grpc.ServiceDesc{
	ServiceName: "ElectronicSignaturesIndustries.xdvnode.xdvnode.Msg",
	HandlerType: (*MsgServer)(nil),
	Methods:     []grpc.MethodDesc{},
	Streams:     []grpc.StreamDesc{},
	Metadata:    "xdvnode/tx.proto",
}
