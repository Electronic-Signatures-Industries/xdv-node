// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: xdvnode/file.proto

package types

import (
	fmt "fmt"
	proto "github.com/gogo/protobuf/proto"
	io "io"
	math "math"
	math_bits "math/bits"
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

type File struct {
	Creator            string `protobuf:"bytes,1,opt,name=creator,proto3" json:"creator,omitempty"`
	Id                 uint64 `protobuf:"varint,2,opt,name=id,proto3" json:"id,omitempty"`
	Data               []byte `protobuf:"bytes,3,opt,name=data,proto3" json:"data,omitempty"`
	ContentType        string `protobuf:"bytes,4,opt,name=content_type,json=contentType,proto3" json:"content_type,omitempty"`
	StorageNetworkType string `protobuf:"bytes,5,opt,name=storage_network_type,json=storageNetworkType,proto3" json:"storage_network_type,omitempty"`
}

func (m *File) Reset()         { *m = File{} }
func (m *File) String() string { return proto.CompactTextString(m) }
func (*File) ProtoMessage()    {}
func (*File) Descriptor() ([]byte, []int) {
	return fileDescriptor_121217a5e03cbe77, []int{0}
}
func (m *File) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *File) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_File.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *File) XXX_Merge(src proto.Message) {
	xxx_messageInfo_File.Merge(m, src)
}
func (m *File) XXX_Size() int {
	return m.Size()
}
func (m *File) XXX_DiscardUnknown() {
	xxx_messageInfo_File.DiscardUnknown(m)
}

var xxx_messageInfo_File proto.InternalMessageInfo

func (m *File) GetCreator() string {
	if m != nil {
		return m.Creator
	}
	return ""
}

func (m *File) GetId() uint64 {
	if m != nil {
		return m.Id
	}
	return 0
}

func (m *File) GetData() []byte {
	if m != nil {
		return m.Data
	}
	return nil
}

func (m *File) GetContentType() string {
	if m != nil {
		return m.ContentType
	}
	return ""
}

func (m *File) GetStorageNetworkType() string {
	if m != nil {
		return m.StorageNetworkType
	}
	return ""
}

func init() {
	proto.RegisterType((*File)(nil), "ElectronicSignaturesIndustries.xdvnode.xdvnode.File")
}

func init() { proto.RegisterFile("xdvnode/file.proto", fileDescriptor_121217a5e03cbe77) }

var fileDescriptor_121217a5e03cbe77 = []byte{
	// 266 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x44, 0x50, 0xbd, 0x4e, 0xb4, 0x40,
	0x14, 0x65, 0xf8, 0xf8, 0x34, 0x8e, 0x1b, 0x8b, 0x89, 0x05, 0xd5, 0x04, 0xad, 0x68, 0x00, 0x13,
	0xdf, 0xc0, 0xa8, 0x89, 0x8d, 0x05, 0x5a, 0x59, 0xb8, 0x61, 0x99, 0x2b, 0x4e, 0xc4, 0x19, 0x32,
	0x73, 0x59, 0xd9, 0xb7, 0xb0, 0xf5, 0x8d, 0x2c, 0xb7, 0xb4, 0x34, 0xf0, 0x22, 0x66, 0x67, 0x21,
	0x54, 0xf7, 0xe7, 0x9c, 0x73, 0x6f, 0xce, 0xa1, 0xac, 0x13, 0x6b, 0xa5, 0x05, 0x64, 0x2f, 0xb2,
	0x86, 0xb4, 0x31, 0x1a, 0x35, 0x4b, 0x6f, 0x6a, 0x28, 0xd1, 0x68, 0x25, 0xcb, 0x07, 0x59, 0xa9,
	0x02, 0x5b, 0x03, 0xf6, 0x4e, 0x89, 0xd6, 0xa2, 0x91, 0x60, 0xd3, 0x51, 0x32, 0xd5, 0xf3, 0x2f,
	0x42, 0x83, 0x5b, 0x59, 0x03, 0x0b, 0xe9, 0x61, 0x69, 0xa0, 0x40, 0x6d, 0x42, 0x12, 0x91, 0xf8,
	0x28, 0x9f, 0x46, 0x76, 0x42, 0x7d, 0x29, 0x42, 0x3f, 0x22, 0x71, 0x90, 0xfb, 0x52, 0x30, 0x46,
	0x03, 0x51, 0x60, 0x11, 0xfe, 0x8b, 0x48, 0xbc, 0xc8, 0x5d, 0xcf, 0xce, 0xe8, 0xa2, 0xd4, 0x0a,
	0x41, 0xe1, 0x12, 0x37, 0x0d, 0x84, 0x81, 0x3b, 0x71, 0x3c, 0xee, 0x1e, 0x37, 0x0d, 0xb0, 0x0b,
	0x7a, 0x6a, 0x51, 0x9b, 0xa2, 0x82, 0xa5, 0x02, 0xfc, 0xd0, 0xe6, 0x6d, 0x4f, 0xfd, 0xef, 0xa8,
	0x6c, 0xc4, 0xee, 0xf7, 0xd0, 0x4e, 0x71, 0xf5, 0xfc, 0xdd, 0x73, 0xb2, 0xed, 0x39, 0xf9, 0xed,
	0x39, 0xf9, 0x1c, 0xb8, 0xb7, 0x1d, 0xb8, 0xf7, 0x33, 0x70, 0xef, 0xe9, 0xba, 0x92, 0xf8, 0xda,
	0xae, 0xd2, 0x52, 0xbf, 0x67, 0xb3, 0xe1, 0x64, 0x76, 0x9c, 0xcc, 0x96, 0xb3, 0x4e, 0xac, 0x13,
	0x17, 0x53, 0x97, 0x4d, 0x81, 0xed, 0x1e, 0xdb, 0xd5, 0x81, 0x8b, 0xec, 0xf2, 0x2f, 0x00, 0x00,
	0xff, 0xff, 0x0c, 0x9f, 0x90, 0x90, 0x48, 0x01, 0x00, 0x00,
}

func (m *File) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *File) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *File) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.StorageNetworkType) > 0 {
		i -= len(m.StorageNetworkType)
		copy(dAtA[i:], m.StorageNetworkType)
		i = encodeVarintFile(dAtA, i, uint64(len(m.StorageNetworkType)))
		i--
		dAtA[i] = 0x2a
	}
	if len(m.ContentType) > 0 {
		i -= len(m.ContentType)
		copy(dAtA[i:], m.ContentType)
		i = encodeVarintFile(dAtA, i, uint64(len(m.ContentType)))
		i--
		dAtA[i] = 0x22
	}
	if len(m.Data) > 0 {
		i -= len(m.Data)
		copy(dAtA[i:], m.Data)
		i = encodeVarintFile(dAtA, i, uint64(len(m.Data)))
		i--
		dAtA[i] = 0x1a
	}
	if m.Id != 0 {
		i = encodeVarintFile(dAtA, i, uint64(m.Id))
		i--
		dAtA[i] = 0x10
	}
	if len(m.Creator) > 0 {
		i -= len(m.Creator)
		copy(dAtA[i:], m.Creator)
		i = encodeVarintFile(dAtA, i, uint64(len(m.Creator)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func encodeVarintFile(dAtA []byte, offset int, v uint64) int {
	offset -= sovFile(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *File) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Creator)
	if l > 0 {
		n += 1 + l + sovFile(uint64(l))
	}
	if m.Id != 0 {
		n += 1 + sovFile(uint64(m.Id))
	}
	l = len(m.Data)
	if l > 0 {
		n += 1 + l + sovFile(uint64(l))
	}
	l = len(m.ContentType)
	if l > 0 {
		n += 1 + l + sovFile(uint64(l))
	}
	l = len(m.StorageNetworkType)
	if l > 0 {
		n += 1 + l + sovFile(uint64(l))
	}
	return n
}

func sovFile(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozFile(x uint64) (n int) {
	return sovFile(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *File) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowFile
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: File: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: File: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Creator", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowFile
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthFile
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthFile
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Creator = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Id", wireType)
			}
			m.Id = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowFile
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.Id |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Data", wireType)
			}
			var byteLen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowFile
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				byteLen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if byteLen < 0 {
				return ErrInvalidLengthFile
			}
			postIndex := iNdEx + byteLen
			if postIndex < 0 {
				return ErrInvalidLengthFile
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Data = append(m.Data[:0], dAtA[iNdEx:postIndex]...)
			if m.Data == nil {
				m.Data = []byte{}
			}
			iNdEx = postIndex
		case 4:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field ContentType", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowFile
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthFile
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthFile
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.ContentType = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 5:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field StorageNetworkType", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowFile
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthFile
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthFile
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.StorageNetworkType = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipFile(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthFile
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipFile(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowFile
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowFile
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowFile
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthFile
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupFile
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthFile
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthFile        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowFile          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupFile = fmt.Errorf("proto: unexpected end of group")
)
