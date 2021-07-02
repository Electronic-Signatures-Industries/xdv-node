/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { File } from "../xdvnode/file";
import { Documents } from "../xdvnode/documents";

export const protobufPackage = "ElectronicSignaturesIndustries.xdvnode.xdvnode";

/** GenesisState defines the xdvnode module's genesis state. */
export interface GenesisState {
  /** this line is used by starport scaffolding # genesis/proto/state */
  fileList: File[];
  /** this line is used by starport scaffolding # genesis/proto/stateField */
  fileCount: Long;
  /** this line is used by starport scaffolding # genesis/proto/stateField */
  documentsList: Documents[];
  /** this line is used by starport scaffolding # genesis/proto/stateField */
  documentsCount: Long;
}

const baseGenesisState: object = {
  fileCount: Long.UZERO,
  documentsCount: Long.UZERO,
};

export const GenesisState = {
  encode(
    message: GenesisState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.fileList) {
      File.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (!message.fileCount.isZero()) {
      writer.uint32(32).uint64(message.fileCount);
    }
    for (const v of message.documentsList) {
      Documents.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (!message.documentsCount.isZero()) {
      writer.uint32(16).uint64(message.documentsCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.fileList = [];
    message.documentsList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          message.fileList.push(File.decode(reader, reader.uint32()));
          break;
        case 4:
          message.fileCount = reader.uint64() as Long;
          break;
        case 1:
          message.documentsList.push(Documents.decode(reader, reader.uint32()));
          break;
        case 2:
          message.documentsCount = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.fileList = [];
    message.documentsList = [];
    if (object.fileList !== undefined && object.fileList !== null) {
      for (const e of object.fileList) {
        message.fileList.push(File.fromJSON(e));
      }
    }
    if (object.fileCount !== undefined && object.fileCount !== null) {
      message.fileCount = Long.fromString(object.fileCount);
    } else {
      message.fileCount = Long.UZERO;
    }
    if (object.documentsList !== undefined && object.documentsList !== null) {
      for (const e of object.documentsList) {
        message.documentsList.push(Documents.fromJSON(e));
      }
    }
    if (object.documentsCount !== undefined && object.documentsCount !== null) {
      message.documentsCount = Long.fromString(object.documentsCount);
    } else {
      message.documentsCount = Long.UZERO;
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.fileList) {
      obj.fileList = message.fileList.map((e) =>
        e ? File.toJSON(e) : undefined
      );
    } else {
      obj.fileList = [];
    }
    message.fileCount !== undefined &&
      (obj.fileCount = (message.fileCount || Long.UZERO).toString());
    if (message.documentsList) {
      obj.documentsList = message.documentsList.map((e) =>
        e ? Documents.toJSON(e) : undefined
      );
    } else {
      obj.documentsList = [];
    }
    message.documentsCount !== undefined &&
      (obj.documentsCount = (message.documentsCount || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.fileList = [];
    message.documentsList = [];
    if (object.fileList !== undefined && object.fileList !== null) {
      for (const e of object.fileList) {
        message.fileList.push(File.fromPartial(e));
      }
    }
    if (object.fileCount !== undefined && object.fileCount !== null) {
      message.fileCount = object.fileCount as Long;
    } else {
      message.fileCount = Long.UZERO;
    }
    if (object.documentsList !== undefined && object.documentsList !== null) {
      for (const e of object.documentsList) {
        message.documentsList.push(Documents.fromPartial(e));
      }
    }
    if (object.documentsCount !== undefined && object.documentsCount !== null) {
      message.documentsCount = object.documentsCount as Long;
    } else {
      message.documentsCount = Long.UZERO;
    }
    return message;
  },
};

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined
  | Long;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
