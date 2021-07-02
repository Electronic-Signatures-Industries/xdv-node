/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "ElectronicSignaturesIndustries.xdvnode.xdvnode";

export interface Documents {
  creator: string;
  id: Long;
  name: string;
  hash: string;
  lastModified: Long;
  contentType: string;
  signature: string;
  network: string;
  did: string;
  alg: string;
  pinned: boolean;
  tokenized: boolean;
  metadataURI: string;
}

const baseDocuments: object = {
  creator: "",
  id: Long.UZERO,
  name: "",
  hash: "",
  lastModified: Long.UZERO,
  contentType: "",
  signature: "",
  network: "",
  did: "",
  alg: "",
  pinned: false,
  tokenized: false,
  metadataURI: "",
};

export const Documents = {
  encode(
    message: Documents,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (!message.id.isZero()) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.hash !== "") {
      writer.uint32(34).string(message.hash);
    }
    if (!message.lastModified.isZero()) {
      writer.uint32(40).uint64(message.lastModified);
    }
    if (message.contentType !== "") {
      writer.uint32(50).string(message.contentType);
    }
    if (message.signature !== "") {
      writer.uint32(58).string(message.signature);
    }
    if (message.network !== "") {
      writer.uint32(66).string(message.network);
    }
    if (message.did !== "") {
      writer.uint32(74).string(message.did);
    }
    if (message.alg !== "") {
      writer.uint32(82).string(message.alg);
    }
    if (message.pinned === true) {
      writer.uint32(88).bool(message.pinned);
    }
    if (message.tokenized === true) {
      writer.uint32(96).bool(message.tokenized);
    }
    if (message.metadataURI !== "") {
      writer.uint32(106).string(message.metadataURI);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Documents {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDocuments } as Documents;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = reader.uint64() as Long;
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.hash = reader.string();
          break;
        case 5:
          message.lastModified = reader.uint64() as Long;
          break;
        case 6:
          message.contentType = reader.string();
          break;
        case 7:
          message.signature = reader.string();
          break;
        case 8:
          message.network = reader.string();
          break;
        case 9:
          message.did = reader.string();
          break;
        case 10:
          message.alg = reader.string();
          break;
        case 11:
          message.pinned = reader.bool();
          break;
        case 12:
          message.tokenized = reader.bool();
          break;
        case 13:
          message.metadataURI = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Documents {
    const message = { ...baseDocuments } as Documents;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Long.fromString(object.id);
    } else {
      message.id = Long.UZERO;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = String(object.hash);
    } else {
      message.hash = "";
    }
    if (object.lastModified !== undefined && object.lastModified !== null) {
      message.lastModified = Long.fromString(object.lastModified);
    } else {
      message.lastModified = Long.UZERO;
    }
    if (object.contentType !== undefined && object.contentType !== null) {
      message.contentType = String(object.contentType);
    } else {
      message.contentType = "";
    }
    if (object.signature !== undefined && object.signature !== null) {
      message.signature = String(object.signature);
    } else {
      message.signature = "";
    }
    if (object.network !== undefined && object.network !== null) {
      message.network = String(object.network);
    } else {
      message.network = "";
    }
    if (object.did !== undefined && object.did !== null) {
      message.did = String(object.did);
    } else {
      message.did = "";
    }
    if (object.alg !== undefined && object.alg !== null) {
      message.alg = String(object.alg);
    } else {
      message.alg = "";
    }
    if (object.pinned !== undefined && object.pinned !== null) {
      message.pinned = Boolean(object.pinned);
    } else {
      message.pinned = false;
    }
    if (object.tokenized !== undefined && object.tokenized !== null) {
      message.tokenized = Boolean(object.tokenized);
    } else {
      message.tokenized = false;
    }
    if (object.metadataURI !== undefined && object.metadataURI !== null) {
      message.metadataURI = String(object.metadataURI);
    } else {
      message.metadataURI = "";
    }
    return message;
  },

  toJSON(message: Documents): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    message.name !== undefined && (obj.name = message.name);
    message.hash !== undefined && (obj.hash = message.hash);
    message.lastModified !== undefined &&
      (obj.lastModified = (message.lastModified || Long.UZERO).toString());
    message.contentType !== undefined &&
      (obj.contentType = message.contentType);
    message.signature !== undefined && (obj.signature = message.signature);
    message.network !== undefined && (obj.network = message.network);
    message.did !== undefined && (obj.did = message.did);
    message.alg !== undefined && (obj.alg = message.alg);
    message.pinned !== undefined && (obj.pinned = message.pinned);
    message.tokenized !== undefined && (obj.tokenized = message.tokenized);
    message.metadataURI !== undefined &&
      (obj.metadataURI = message.metadataURI);
    return obj;
  },

  fromPartial(object: DeepPartial<Documents>): Documents {
    const message = { ...baseDocuments } as Documents;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id as Long;
    } else {
      message.id = Long.UZERO;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = object.hash;
    } else {
      message.hash = "";
    }
    if (object.lastModified !== undefined && object.lastModified !== null) {
      message.lastModified = object.lastModified as Long;
    } else {
      message.lastModified = Long.UZERO;
    }
    if (object.contentType !== undefined && object.contentType !== null) {
      message.contentType = object.contentType;
    } else {
      message.contentType = "";
    }
    if (object.signature !== undefined && object.signature !== null) {
      message.signature = object.signature;
    } else {
      message.signature = "";
    }
    if (object.network !== undefined && object.network !== null) {
      message.network = object.network;
    } else {
      message.network = "";
    }
    if (object.did !== undefined && object.did !== null) {
      message.did = object.did;
    } else {
      message.did = "";
    }
    if (object.alg !== undefined && object.alg !== null) {
      message.alg = object.alg;
    } else {
      message.alg = "";
    }
    if (object.pinned !== undefined && object.pinned !== null) {
      message.pinned = object.pinned;
    } else {
      message.pinned = false;
    }
    if (object.tokenized !== undefined && object.tokenized !== null) {
      message.tokenized = object.tokenized;
    } else {
      message.tokenized = false;
    }
    if (object.metadataURI !== undefined && object.metadataURI !== null) {
      message.metadataURI = object.metadataURI;
    } else {
      message.metadataURI = "";
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
