/* eslint-disable */
import * as Long from 'long'
import { util, configure, Writer, Reader } from 'protobufjs/minimal'
import { File } from '../xdvnode/file'
import { Documents } from '../xdvnode/documents'

export const protobufPackage = 'ElectronicSignaturesIndustries.xdvnode.xdvnode'

/** GenesisState defines the xdvnode module's genesis state. */
export interface GenesisState {
  /** this line is used by starport scaffolding # genesis/proto/state */
  fileList: File[]
  /** this line is used by starport scaffolding # genesis/proto/stateField */
  fileCount: number
  /** this line is used by starport scaffolding # genesis/proto/stateField */
  documentsList: Documents[]
  /** this line is used by starport scaffolding # genesis/proto/stateField */
  documentsCount: number
}

const baseGenesisState: object = { fileCount: 0, documentsCount: 0 }

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    for (const v of message.fileList) {
      File.encode(v!, writer.uint32(26).fork()).ldelim()
    }
    if (message.fileCount !== 0) {
      writer.uint32(32).uint64(message.fileCount)
    }
    for (const v of message.documentsList) {
      Documents.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.documentsCount !== 0) {
      writer.uint32(16).uint64(message.documentsCount)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseGenesisState } as GenesisState
    message.fileList = []
    message.documentsList = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 3:
          message.fileList.push(File.decode(reader, reader.uint32()))
          break
        case 4:
          message.fileCount = longToNumber(reader.uint64() as Long)
          break
        case 1:
          message.documentsList.push(Documents.decode(reader, reader.uint32()))
          break
        case 2:
          message.documentsCount = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState
    message.fileList = []
    message.documentsList = []
    if (object.fileList !== undefined && object.fileList !== null) {
      for (const e of object.fileList) {
        message.fileList.push(File.fromJSON(e))
      }
    }
    if (object.fileCount !== undefined && object.fileCount !== null) {
      message.fileCount = Number(object.fileCount)
    } else {
      message.fileCount = 0
    }
    if (object.documentsList !== undefined && object.documentsList !== null) {
      for (const e of object.documentsList) {
        message.documentsList.push(Documents.fromJSON(e))
      }
    }
    if (object.documentsCount !== undefined && object.documentsCount !== null) {
      message.documentsCount = Number(object.documentsCount)
    } else {
      message.documentsCount = 0
    }
    return message
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {}
    if (message.fileList) {
      obj.fileList = message.fileList.map((e) => (e ? File.toJSON(e) : undefined))
    } else {
      obj.fileList = []
    }
    message.fileCount !== undefined && (obj.fileCount = message.fileCount)
    if (message.documentsList) {
      obj.documentsList = message.documentsList.map((e) => (e ? Documents.toJSON(e) : undefined))
    } else {
      obj.documentsList = []
    }
    message.documentsCount !== undefined && (obj.documentsCount = message.documentsCount)
    return obj
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState
    message.fileList = []
    message.documentsList = []
    if (object.fileList !== undefined && object.fileList !== null) {
      for (const e of object.fileList) {
        message.fileList.push(File.fromPartial(e))
      }
    }
    if (object.fileCount !== undefined && object.fileCount !== null) {
      message.fileCount = object.fileCount
    } else {
      message.fileCount = 0
    }
    if (object.documentsList !== undefined && object.documentsList !== null) {
      for (const e of object.documentsList) {
        message.documentsList.push(Documents.fromPartial(e))
      }
    }
    if (object.documentsCount !== undefined && object.documentsCount !== null) {
      message.documentsCount = object.documentsCount
    } else {
      message.documentsCount = 0
    }
    return message
  }
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
