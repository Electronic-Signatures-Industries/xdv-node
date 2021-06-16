/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal'
import * as Long from 'long'

export const protobufPackage = 'ElectronicSignaturesIndustries.xdvnode.xdvnode'

/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreateDocuments {
  creator: string
  name: string
  hash: string
  lastModified: number
  contentType: string
  signature: string
  network: string
  did: string
  alg: string
  pinned: boolean
  tokenized: boolean
}

export interface MsgCreateDocumentsResponse {
  id: number
}

export interface MsgUpdateDocuments {
  creator: string
  id: number
  name: string
}

export interface MsgUpdateDocumentsResponse {}

export interface MsgDeleteDocuments {
  creator: string
  id: number
}

export interface MsgDeleteDocumentsResponse {}

const baseMsgCreateDocuments: object = {
  creator: '',
  name: '',
  hash: '',
  lastModified: 0,
  contentType: '',
  signature: '',
  network: '',
  did: '',
  alg: '',
  pinned: false,
  tokenized: false
}

export const MsgCreateDocuments = {
  encode(message: MsgCreateDocuments, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.name !== '') {
      writer.uint32(18).string(message.name)
    }
    if (message.hash !== '') {
      writer.uint32(34).string(message.hash)
    }
    if (message.lastModified !== 0) {
      writer.uint32(40).uint64(message.lastModified)
    }
    if (message.contentType !== '') {
      writer.uint32(50).string(message.contentType)
    }
    if (message.signature !== '') {
      writer.uint32(58).string(message.signature)
    }
    if (message.network !== '') {
      writer.uint32(66).string(message.network)
    }
    if (message.did !== '') {
      writer.uint32(74).string(message.did)
    }
    if (message.alg !== '') {
      writer.uint32(82).string(message.alg)
    }
    if (message.pinned === true) {
      writer.uint32(88).bool(message.pinned)
    }
    if (message.tokenized === true) {
      writer.uint32(96).bool(message.tokenized)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateDocuments {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateDocuments } as MsgCreateDocuments
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.name = reader.string()
          break
        case 4:
          message.hash = reader.string()
          break
        case 5:
          message.lastModified = longToNumber(reader.uint64() as Long)
          break
        case 6:
          message.contentType = reader.string()
          break
        case 7:
          message.signature = reader.string()
          break
        case 8:
          message.network = reader.string()
          break
        case 9:
          message.did = reader.string()
          break
        case 10:
          message.alg = reader.string()
          break
        case 11:
          message.pinned = reader.bool()
          break
        case 12:
          message.tokenized = reader.bool()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgCreateDocuments {
    const message = { ...baseMsgCreateDocuments } as MsgCreateDocuments
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name)
    } else {
      message.name = ''
    }
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = String(object.hash)
    } else {
      message.hash = ''
    }
    if (object.lastModified !== undefined && object.lastModified !== null) {
      message.lastModified = Number(object.lastModified)
    } else {
      message.lastModified = 0
    }
    if (object.contentType !== undefined && object.contentType !== null) {
      message.contentType = String(object.contentType)
    } else {
      message.contentType = ''
    }
    if (object.signature !== undefined && object.signature !== null) {
      message.signature = String(object.signature)
    } else {
      message.signature = ''
    }
    if (object.network !== undefined && object.network !== null) {
      message.network = String(object.network)
    } else {
      message.network = ''
    }
    if (object.did !== undefined && object.did !== null) {
      message.did = String(object.did)
    } else {
      message.did = ''
    }
    if (object.alg !== undefined && object.alg !== null) {
      message.alg = String(object.alg)
    } else {
      message.alg = ''
    }
    if (object.pinned !== undefined && object.pinned !== null) {
      message.pinned = Boolean(object.pinned)
    } else {
      message.pinned = false
    }
    if (object.tokenized !== undefined && object.tokenized !== null) {
      message.tokenized = Boolean(object.tokenized)
    } else {
      message.tokenized = false
    }
    return message
  },

  toJSON(message: MsgCreateDocuments): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.name !== undefined && (obj.name = message.name)
    message.hash !== undefined && (obj.hash = message.hash)
    message.lastModified !== undefined && (obj.lastModified = message.lastModified)
    message.contentType !== undefined && (obj.contentType = message.contentType)
    message.signature !== undefined && (obj.signature = message.signature)
    message.network !== undefined && (obj.network = message.network)
    message.did !== undefined && (obj.did = message.did)
    message.alg !== undefined && (obj.alg = message.alg)
    message.pinned !== undefined && (obj.pinned = message.pinned)
    message.tokenized !== undefined && (obj.tokenized = message.tokenized)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateDocuments>): MsgCreateDocuments {
    const message = { ...baseMsgCreateDocuments } as MsgCreateDocuments
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name
    } else {
      message.name = ''
    }
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = object.hash
    } else {
      message.hash = ''
    }
    if (object.lastModified !== undefined && object.lastModified !== null) {
      message.lastModified = object.lastModified
    } else {
      message.lastModified = 0
    }
    if (object.contentType !== undefined && object.contentType !== null) {
      message.contentType = object.contentType
    } else {
      message.contentType = ''
    }
    if (object.signature !== undefined && object.signature !== null) {
      message.signature = object.signature
    } else {
      message.signature = ''
    }
    if (object.network !== undefined && object.network !== null) {
      message.network = object.network
    } else {
      message.network = ''
    }
    if (object.did !== undefined && object.did !== null) {
      message.did = object.did
    } else {
      message.did = ''
    }
    if (object.alg !== undefined && object.alg !== null) {
      message.alg = object.alg
    } else {
      message.alg = ''
    }
    if (object.pinned !== undefined && object.pinned !== null) {
      message.pinned = object.pinned
    } else {
      message.pinned = false
    }
    if (object.tokenized !== undefined && object.tokenized !== null) {
      message.tokenized = object.tokenized
    } else {
      message.tokenized = false
    }
    return message
  }
}

const baseMsgCreateDocumentsResponse: object = { id: 0 }

export const MsgCreateDocumentsResponse = {
  encode(message: MsgCreateDocumentsResponse, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateDocumentsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateDocumentsResponse } as MsgCreateDocumentsResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgCreateDocumentsResponse {
    const message = { ...baseMsgCreateDocumentsResponse } as MsgCreateDocumentsResponse
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: MsgCreateDocumentsResponse): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateDocumentsResponse>): MsgCreateDocumentsResponse {
    const message = { ...baseMsgCreateDocumentsResponse } as MsgCreateDocumentsResponse
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseMsgUpdateDocuments: object = { creator: '', id: 0, name: '' }

export const MsgUpdateDocuments = {
  encode(message: MsgUpdateDocuments, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id)
    }
    if (message.name !== '') {
      writer.uint32(26).string(message.name)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateDocuments {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateDocuments } as MsgUpdateDocuments
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.id = longToNumber(reader.uint64() as Long)
          break
        case 3:
          message.name = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgUpdateDocuments {
    const message = { ...baseMsgUpdateDocuments } as MsgUpdateDocuments
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name)
    } else {
      message.name = ''
    }
    return message
  },

  toJSON(message: MsgUpdateDocuments): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = message.id)
    message.name !== undefined && (obj.name = message.name)
    return obj
  },

  fromPartial(object: DeepPartial<MsgUpdateDocuments>): MsgUpdateDocuments {
    const message = { ...baseMsgUpdateDocuments } as MsgUpdateDocuments
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name
    } else {
      message.name = ''
    }
    return message
  }
}

const baseMsgUpdateDocumentsResponse: object = {}

export const MsgUpdateDocumentsResponse = {
  encode(_: MsgUpdateDocumentsResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateDocumentsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateDocumentsResponse } as MsgUpdateDocumentsResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgUpdateDocumentsResponse {
    const message = { ...baseMsgUpdateDocumentsResponse } as MsgUpdateDocumentsResponse
    return message
  },

  toJSON(_: MsgUpdateDocumentsResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgUpdateDocumentsResponse>): MsgUpdateDocumentsResponse {
    const message = { ...baseMsgUpdateDocumentsResponse } as MsgUpdateDocumentsResponse
    return message
  }
}

const baseMsgDeleteDocuments: object = { creator: '', id: 0 }

export const MsgDeleteDocuments = {
  encode(message: MsgDeleteDocuments, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteDocuments {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteDocuments } as MsgDeleteDocuments
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.id = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgDeleteDocuments {
    const message = { ...baseMsgDeleteDocuments } as MsgDeleteDocuments
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: MsgDeleteDocuments): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<MsgDeleteDocuments>): MsgDeleteDocuments {
    const message = { ...baseMsgDeleteDocuments } as MsgDeleteDocuments
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseMsgDeleteDocumentsResponse: object = {}

export const MsgDeleteDocumentsResponse = {
  encode(_: MsgDeleteDocumentsResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteDocumentsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteDocumentsResponse } as MsgDeleteDocumentsResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgDeleteDocumentsResponse {
    const message = { ...baseMsgDeleteDocumentsResponse } as MsgDeleteDocumentsResponse
    return message
  },

  toJSON(_: MsgDeleteDocumentsResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgDeleteDocumentsResponse>): MsgDeleteDocumentsResponse {
    const message = { ...baseMsgDeleteDocumentsResponse } as MsgDeleteDocumentsResponse
    return message
  }
}

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  CreateDocuments(request: MsgCreateDocuments): Promise<MsgCreateDocumentsResponse>
  UpdateDocuments(request: MsgUpdateDocuments): Promise<MsgUpdateDocumentsResponse>
  DeleteDocuments(request: MsgDeleteDocuments): Promise<MsgDeleteDocumentsResponse>
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
  }
  CreateDocuments(request: MsgCreateDocuments): Promise<MsgCreateDocumentsResponse> {
    const data = MsgCreateDocuments.encode(request).finish()
    const promise = this.rpc.request('ElectronicSignaturesIndustries.xdvnode.xdvnode.Msg', 'CreateDocuments', data)
    return promise.then((data) => MsgCreateDocumentsResponse.decode(new Reader(data)))
  }

  UpdateDocuments(request: MsgUpdateDocuments): Promise<MsgUpdateDocumentsResponse> {
    const data = MsgUpdateDocuments.encode(request).finish()
    const promise = this.rpc.request('ElectronicSignaturesIndustries.xdvnode.xdvnode.Msg', 'UpdateDocuments', data)
    return promise.then((data) => MsgUpdateDocumentsResponse.decode(new Reader(data)))
  }

  DeleteDocuments(request: MsgDeleteDocuments): Promise<MsgDeleteDocumentsResponse> {
    const data = MsgDeleteDocuments.encode(request).finish()
    const promise = this.rpc.request('ElectronicSignaturesIndustries.xdvnode.xdvnode.Msg', 'DeleteDocuments', data)
    return promise.then((data) => MsgDeleteDocumentsResponse.decode(new Reader(data)))
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>
}

declare var self: any | undefined
declare var window: any | undefined
var globalThis: any = (() => {
  if (typeof globalThis !== 'undefined') return globalThis
  if (typeof self !== 'undefined') return self
  if (typeof window !== 'undefined') return window
  if (typeof global !== 'undefined') return global
  throw 'Unable to locate global object'
})()

type Builtin = Date | Function | Uint8Array | string | number | undefined
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER')
  }
  return long.toNumber()
}

if (util.Long !== Long) {
  util.Long = Long as any
  configure()
}