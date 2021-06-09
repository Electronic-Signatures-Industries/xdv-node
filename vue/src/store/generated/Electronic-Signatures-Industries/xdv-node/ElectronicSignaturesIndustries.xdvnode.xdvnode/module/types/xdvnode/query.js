/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal';
import * as Long from 'long';
import { Documents } from '../xdvnode/documents';
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination';
export const protobufPackage = 'ElectronicSignaturesIndustries.xdvnode.xdvnode';
const baseQueryGetDocumentsRequest = { id: 0 };
export const QueryGetDocumentsRequest = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetDocumentsRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetDocumentsRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetDocumentsRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    }
};
const baseQueryGetDocumentsResponse = {};
export const QueryGetDocumentsResponse = {
    encode(message, writer = Writer.create()) {
        if (message.Documents !== undefined) {
            Documents.encode(message.Documents, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetDocumentsResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.Documents = Documents.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetDocumentsResponse };
        if (object.Documents !== undefined && object.Documents !== null) {
            message.Documents = Documents.fromJSON(object.Documents);
        }
        else {
            message.Documents = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.Documents !== undefined && (obj.Documents = message.Documents ? Documents.toJSON(message.Documents) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetDocumentsResponse };
        if (object.Documents !== undefined && object.Documents !== null) {
            message.Documents = Documents.fromPartial(object.Documents);
        }
        else {
            message.Documents = undefined;
        }
        return message;
    }
};
const baseQueryAllDocumentsRequest = {};
export const QueryAllDocumentsRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllDocumentsRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllDocumentsRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllDocumentsRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryAllDocumentsResponse = {};
export const QueryAllDocumentsResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.Documents) {
            Documents.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllDocumentsResponse };
        message.Documents = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.Documents.push(Documents.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllDocumentsResponse };
        message.Documents = [];
        if (object.Documents !== undefined && object.Documents !== null) {
            for (const e of object.Documents) {
                message.Documents.push(Documents.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.Documents) {
            obj.Documents = message.Documents.map((e) => (e ? Documents.toJSON(e) : undefined));
        }
        else {
            obj.Documents = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllDocumentsResponse };
        message.Documents = [];
        if (object.Documents !== undefined && object.Documents !== null) {
            for (const e of object.Documents) {
                message.Documents.push(Documents.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
export class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    Documents(request) {
        const data = QueryGetDocumentsRequest.encode(request).finish();
        const promise = this.rpc.request('ElectronicSignaturesIndustries.xdvnode.xdvnode.Query', 'Documents', data);
        return promise.then((data) => QueryGetDocumentsResponse.decode(new Reader(data)));
    }
    DocumentsAll(request) {
        const data = QueryAllDocumentsRequest.encode(request).finish();
        const promise = this.rpc.request('ElectronicSignaturesIndustries.xdvnode.xdvnode.Query', 'DocumentsAll', data);
        return promise.then((data) => QueryAllDocumentsResponse.decode(new Reader(data)));
    }
}
var globalThis = (() => {
    if (typeof globalThis !== 'undefined')
        return globalThis;
    if (typeof self !== 'undefined')
        return self;
    if (typeof window !== 'undefined')
        return window;
    if (typeof global !== 'undefined')
        return global;
    throw 'Unable to locate global object';
})();
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER');
    }
    return long.toNumber();
}
if (util.Long !== Long) {
    util.Long = Long;
    configure();
}
