/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal'
import * as Long from 'long'
import { File } from '../xdvnode/file'
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination'
import { Documents } from '../xdvnode/documents'

export const protobufPackage = 'ElectronicSignaturesIndustries.xdvnode.xdvnode'

/** this line is used by starport scaffolding # 3 */
export interface QueryGetFileRequest {
  cid: string
}

export interface QueryGetFileResponse {
  File: File | undefined
}

export interface QueryAllFileRequest {
  pagination: PageRequest | undefined
}

export interface QueryAllFileResponse {
  File: File[]
  pagination: PageResponse | undefined
}

export interface QueryGetDocumentsRequest {
  id: number
}

export interface QueryGetDocumentsResponse {
  Documents: Documents | undefined
}

export interface QueryAllDocumentsRequest {
  pagination: PageRequest | undefined
}

export interface QueryAllDocumentsResponse {
  Documents: Documents[]
  pagination: PageResponse | undefined
}

const baseQueryGetFileRequest: object = { cid: '' }

export const QueryGetFileRequest = {
  encode(message: QueryGetFileRequest, writer: Writer = Writer.create()): Writer {
    if (message.cid !== '') {
      writer.uint32(10).string(message.cid)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetFileRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetFileRequest } as QueryGetFileRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.cid = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetFileRequest {
    const message = { ...baseQueryGetFileRequest } as QueryGetFileRequest
    if (object.cid !== undefined && object.cid !== null) {
      message.cid = String(object.cid)
    } else {
      message.cid = ''
    }
    return message
  },

  toJSON(message: QueryGetFileRequest): unknown {
    const obj: any = {}
    message.cid !== undefined && (obj.cid = message.cid)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetFileRequest>): QueryGetFileRequest {
    const message = { ...baseQueryGetFileRequest } as QueryGetFileRequest
    if (object.cid !== undefined && object.cid !== null) {
      message.cid = object.cid
    } else {
      message.cid = ''
    }
    return message
  }
}

const baseQueryGetFileResponse: object = {}

export const QueryGetFileResponse = {
  encode(message: QueryGetFileResponse, writer: Writer = Writer.create()): Writer {
    if (message.File !== undefined) {
      File.encode(message.File, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetFileResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetFileResponse } as QueryGetFileResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.File = File.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetFileResponse {
    const message = { ...baseQueryGetFileResponse } as QueryGetFileResponse
    if (object.File !== undefined && object.File !== null) {
      message.File = File.fromJSON(object.File)
    } else {
      message.File = undefined
    }
    return message
  },

  toJSON(message: QueryGetFileResponse): unknown {
    const obj: any = {}
    message.File !== undefined && (obj.File = message.File ? File.toJSON(message.File) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetFileResponse>): QueryGetFileResponse {
    const message = { ...baseQueryGetFileResponse } as QueryGetFileResponse
    if (object.File !== undefined && object.File !== null) {
      message.File = File.fromPartial(object.File)
    } else {
      message.File = undefined
    }
    return message
  }
}

const baseQueryAllFileRequest: object = {}

export const QueryAllFileRequest = {
  encode(message: QueryAllFileRequest, writer: Writer = Writer.create()): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllFileRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllFileRequest } as QueryAllFileRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllFileRequest {
    const message = { ...baseQueryAllFileRequest } as QueryAllFileRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllFileRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllFileRequest>): QueryAllFileRequest {
    const message = { ...baseQueryAllFileRequest } as QueryAllFileRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryAllFileResponse: object = {}

export const QueryAllFileResponse = {
  encode(message: QueryAllFileResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.File) {
      File.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllFileResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllFileResponse } as QueryAllFileResponse
    message.File = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.File.push(File.decode(reader, reader.uint32()))
          break
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllFileResponse {
    const message = { ...baseQueryAllFileResponse } as QueryAllFileResponse
    message.File = []
    if (object.File !== undefined && object.File !== null) {
      for (const e of object.File) {
        message.File.push(File.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllFileResponse): unknown {
    const obj: any = {}
    if (message.File) {
      obj.File = message.File.map((e) => (e ? File.toJSON(e) : undefined))
    } else {
      obj.File = []
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllFileResponse>): QueryAllFileResponse {
    const message = { ...baseQueryAllFileResponse } as QueryAllFileResponse
    message.File = []
    if (object.File !== undefined && object.File !== null) {
      for (const e of object.File) {
        message.File.push(File.fromPartial(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryGetDocumentsRequest: object = { id: 0 }

export const QueryGetDocumentsRequest = {
  encode(message: QueryGetDocumentsRequest, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetDocumentsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetDocumentsRequest } as QueryGetDocumentsRequest
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

  fromJSON(object: any): QueryGetDocumentsRequest {
    const message = { ...baseQueryGetDocumentsRequest } as QueryGetDocumentsRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: QueryGetDocumentsRequest): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetDocumentsRequest>): QueryGetDocumentsRequest {
    const message = { ...baseQueryGetDocumentsRequest } as QueryGetDocumentsRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseQueryGetDocumentsResponse: object = {}

export const QueryGetDocumentsResponse = {
  encode(message: QueryGetDocumentsResponse, writer: Writer = Writer.create()): Writer {
    if (message.Documents !== undefined) {
      Documents.encode(message.Documents, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetDocumentsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetDocumentsResponse } as QueryGetDocumentsResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.Documents = Documents.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetDocumentsResponse {
    const message = { ...baseQueryGetDocumentsResponse } as QueryGetDocumentsResponse
    if (object.Documents !== undefined && object.Documents !== null) {
      message.Documents = Documents.fromJSON(object.Documents)
    } else {
      message.Documents = undefined
    }
    return message
  },

  toJSON(message: QueryGetDocumentsResponse): unknown {
    const obj: any = {}
    message.Documents !== undefined && (obj.Documents = message.Documents ? Documents.toJSON(message.Documents) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetDocumentsResponse>): QueryGetDocumentsResponse {
    const message = { ...baseQueryGetDocumentsResponse } as QueryGetDocumentsResponse
    if (object.Documents !== undefined && object.Documents !== null) {
      message.Documents = Documents.fromPartial(object.Documents)
    } else {
      message.Documents = undefined
    }
    return message
  }
}

const baseQueryAllDocumentsRequest: object = {}

export const QueryAllDocumentsRequest = {
  encode(message: QueryAllDocumentsRequest, writer: Writer = Writer.create()): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllDocumentsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllDocumentsRequest } as QueryAllDocumentsRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllDocumentsRequest {
    const message = { ...baseQueryAllDocumentsRequest } as QueryAllDocumentsRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllDocumentsRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllDocumentsRequest>): QueryAllDocumentsRequest {
    const message = { ...baseQueryAllDocumentsRequest } as QueryAllDocumentsRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryAllDocumentsResponse: object = {}

export const QueryAllDocumentsResponse = {
  encode(message: QueryAllDocumentsResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.Documents) {
      Documents.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllDocumentsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllDocumentsResponse } as QueryAllDocumentsResponse
    message.Documents = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.Documents.push(Documents.decode(reader, reader.uint32()))
          break
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllDocumentsResponse {
    const message = { ...baseQueryAllDocumentsResponse } as QueryAllDocumentsResponse
    message.Documents = []
    if (object.Documents !== undefined && object.Documents !== null) {
      for (const e of object.Documents) {
        message.Documents.push(Documents.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllDocumentsResponse): unknown {
    const obj: any = {}
    if (message.Documents) {
      obj.Documents = message.Documents.map((e) => (e ? Documents.toJSON(e) : undefined))
    } else {
      obj.Documents = []
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllDocumentsResponse>): QueryAllDocumentsResponse {
    const message = { ...baseQueryAllDocumentsResponse } as QueryAllDocumentsResponse
    message.Documents = []
    if (object.Documents !== undefined && object.Documents !== null) {
      for (const e of object.Documents) {
        message.Documents.push(Documents.fromPartial(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

/** Query defines the gRPC querier service. */
export interface Query {
  /** Queries a file by id. */
  File(request: QueryGetFileRequest): Promise<QueryGetFileResponse>
  /** Queries a documents by id. */
  Documents(request: QueryGetDocumentsRequest): Promise<QueryGetDocumentsResponse>
  /** Queries a list of documents items. */
  DocumentsAll(request: QueryAllDocumentsRequest): Promise<QueryAllDocumentsResponse>
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
  }
  File(request: QueryGetFileRequest): Promise<QueryGetFileResponse> {
    const data = QueryGetFileRequest.encode(request).finish()
    const promise = this.rpc.request('ElectronicSignaturesIndustries.xdvnode.xdvnode.Query', 'File', data)
    return promise.then((data) => QueryGetFileResponse.decode(new Reader(data)))
  }

  Documents(request: QueryGetDocumentsRequest): Promise<QueryGetDocumentsResponse> {
    const data = QueryGetDocumentsRequest.encode(request).finish()
    const promise = this.rpc.request('ElectronicSignaturesIndustries.xdvnode.xdvnode.Query', 'Documents', data)
    return promise.then((data) => QueryGetDocumentsResponse.decode(new Reader(data)))
  }

  DocumentsAll(request: QueryAllDocumentsRequest): Promise<QueryAllDocumentsResponse> {
    const data = QueryAllDocumentsRequest.encode(request).finish()
    const promise = this.rpc.request('ElectronicSignaturesIndustries.xdvnode.xdvnode.Query', 'DocumentsAll', data)
    return promise.then((data) => QueryAllDocumentsResponse.decode(new Reader(data)))
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
