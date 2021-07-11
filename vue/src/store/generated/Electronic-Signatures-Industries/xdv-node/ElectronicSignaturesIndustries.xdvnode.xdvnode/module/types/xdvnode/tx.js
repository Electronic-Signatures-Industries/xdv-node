/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal';
import * as Long from 'long';
export const protobufPackage = 'ElectronicSignaturesIndustries.xdvnode.xdvnode';
const baseMsgPutBlock = { creator: '', contentType: '' };
export const MsgPutBlock = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.data.length !== 0) {
            writer.uint32(18).bytes(message.data);
        }
        if (message.contentType !== '') {
            writer.uint32(26).string(message.contentType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgPutBlock };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.data = reader.bytes();
                    break;
                case 3:
                    message.contentType = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgPutBlock };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = bytesFromBase64(object.data);
        }
        if (object.contentType !== undefined && object.contentType !== null) {
            message.contentType = String(object.contentType);
        }
        else {
            message.contentType = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
        message.contentType !== undefined && (obj.contentType = message.contentType);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgPutBlock };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = object.data;
        }
        else {
            message.data = new Uint8Array();
        }
        if (object.contentType !== undefined && object.contentType !== null) {
            message.contentType = object.contentType;
        }
        else {
            message.contentType = '';
        }
        return message;
    }
};
const baseMsgPutBlockResponse = { cid: '' };
export const MsgPutBlockResponse = {
    encode(message, writer = Writer.create()) {
        if (message.cid !== '') {
            writer.uint32(10).string(message.cid);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgPutBlockResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cid = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgPutBlockResponse };
        if (object.cid !== undefined && object.cid !== null) {
            message.cid = String(object.cid);
        }
        else {
            message.cid = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.cid !== undefined && (obj.cid = message.cid);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgPutBlockResponse };
        if (object.cid !== undefined && object.cid !== null) {
            message.cid = object.cid;
        }
        else {
            message.cid = '';
        }
        return message;
    }
};
const baseMsgCreateFile = { creator: '', contentType: '' };
export const MsgCreateFile = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.data.length !== 0) {
            writer.uint32(18).bytes(message.data);
        }
        if (message.contentType !== '') {
            writer.uint32(26).string(message.contentType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateFile };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.data = reader.bytes();
                    break;
                case 3:
                    message.contentType = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreateFile };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = bytesFromBase64(object.data);
        }
        if (object.contentType !== undefined && object.contentType !== null) {
            message.contentType = String(object.contentType);
        }
        else {
            message.contentType = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
        message.contentType !== undefined && (obj.contentType = message.contentType);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateFile };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = object.data;
        }
        else {
            message.data = new Uint8Array();
        }
        if (object.contentType !== undefined && object.contentType !== null) {
            message.contentType = object.contentType;
        }
        else {
            message.contentType = '';
        }
        return message;
    }
};
const baseMsgCreateFileResponse = { cid: '' };
export const MsgCreateFileResponse = {
    encode(message, writer = Writer.create()) {
        if (message.cid !== '') {
            writer.uint32(10).string(message.cid);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateFileResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cid = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreateFileResponse };
        if (object.cid !== undefined && object.cid !== null) {
            message.cid = String(object.cid);
        }
        else {
            message.cid = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.cid !== undefined && (obj.cid = message.cid);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateFileResponse };
        if (object.cid !== undefined && object.cid !== null) {
            message.cid = object.cid;
        }
        else {
            message.cid = '';
        }
        return message;
    }
};
const baseMsgCreateDocuments = {
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
    tokenized: false,
    metadataURI: ''
};
export const MsgCreateDocuments = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.hash !== '') {
            writer.uint32(34).string(message.hash);
        }
        if (message.lastModified !== 0) {
            writer.uint32(40).uint64(message.lastModified);
        }
        if (message.contentType !== '') {
            writer.uint32(50).string(message.contentType);
        }
        if (message.signature !== '') {
            writer.uint32(58).string(message.signature);
        }
        if (message.network !== '') {
            writer.uint32(66).string(message.network);
        }
        if (message.did !== '') {
            writer.uint32(74).string(message.did);
        }
        if (message.alg !== '') {
            writer.uint32(82).string(message.alg);
        }
        if (message.pinned === true) {
            writer.uint32(88).bool(message.pinned);
        }
        if (message.tokenized === true) {
            writer.uint32(96).bool(message.tokenized);
        }
        if (message.metadataURI !== '') {
            writer.uint32(106).string(message.metadataURI);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateDocuments };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 4:
                    message.hash = reader.string();
                    break;
                case 5:
                    message.lastModified = longToNumber(reader.uint64());
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
    fromJSON(object) {
        const message = { ...baseMsgCreateDocuments };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = String(object.hash);
        }
        else {
            message.hash = '';
        }
        if (object.lastModified !== undefined && object.lastModified !== null) {
            message.lastModified = Number(object.lastModified);
        }
        else {
            message.lastModified = 0;
        }
        if (object.contentType !== undefined && object.contentType !== null) {
            message.contentType = String(object.contentType);
        }
        else {
            message.contentType = '';
        }
        if (object.signature !== undefined && object.signature !== null) {
            message.signature = String(object.signature);
        }
        else {
            message.signature = '';
        }
        if (object.network !== undefined && object.network !== null) {
            message.network = String(object.network);
        }
        else {
            message.network = '';
        }
        if (object.did !== undefined && object.did !== null) {
            message.did = String(object.did);
        }
        else {
            message.did = '';
        }
        if (object.alg !== undefined && object.alg !== null) {
            message.alg = String(object.alg);
        }
        else {
            message.alg = '';
        }
        if (object.pinned !== undefined && object.pinned !== null) {
            message.pinned = Boolean(object.pinned);
        }
        else {
            message.pinned = false;
        }
        if (object.tokenized !== undefined && object.tokenized !== null) {
            message.tokenized = Boolean(object.tokenized);
        }
        else {
            message.tokenized = false;
        }
        if (object.metadataURI !== undefined && object.metadataURI !== null) {
            message.metadataURI = String(object.metadataURI);
        }
        else {
            message.metadataURI = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.name !== undefined && (obj.name = message.name);
        message.hash !== undefined && (obj.hash = message.hash);
        message.lastModified !== undefined && (obj.lastModified = message.lastModified);
        message.contentType !== undefined && (obj.contentType = message.contentType);
        message.signature !== undefined && (obj.signature = message.signature);
        message.network !== undefined && (obj.network = message.network);
        message.did !== undefined && (obj.did = message.did);
        message.alg !== undefined && (obj.alg = message.alg);
        message.pinned !== undefined && (obj.pinned = message.pinned);
        message.tokenized !== undefined && (obj.tokenized = message.tokenized);
        message.metadataURI !== undefined && (obj.metadataURI = message.metadataURI);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateDocuments };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = object.hash;
        }
        else {
            message.hash = '';
        }
        if (object.lastModified !== undefined && object.lastModified !== null) {
            message.lastModified = object.lastModified;
        }
        else {
            message.lastModified = 0;
        }
        if (object.contentType !== undefined && object.contentType !== null) {
            message.contentType = object.contentType;
        }
        else {
            message.contentType = '';
        }
        if (object.signature !== undefined && object.signature !== null) {
            message.signature = object.signature;
        }
        else {
            message.signature = '';
        }
        if (object.network !== undefined && object.network !== null) {
            message.network = object.network;
        }
        else {
            message.network = '';
        }
        if (object.did !== undefined && object.did !== null) {
            message.did = object.did;
        }
        else {
            message.did = '';
        }
        if (object.alg !== undefined && object.alg !== null) {
            message.alg = object.alg;
        }
        else {
            message.alg = '';
        }
        if (object.pinned !== undefined && object.pinned !== null) {
            message.pinned = object.pinned;
        }
        else {
            message.pinned = false;
        }
        if (object.tokenized !== undefined && object.tokenized !== null) {
            message.tokenized = object.tokenized;
        }
        else {
            message.tokenized = false;
        }
        if (object.metadataURI !== undefined && object.metadataURI !== null) {
            message.metadataURI = object.metadataURI;
        }
        else {
            message.metadataURI = '';
        }
        return message;
    }
};
const baseMsgCreateDocumentsResponse = { id: 0 };
export const MsgCreateDocumentsResponse = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateDocumentsResponse };
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
        const message = { ...baseMsgCreateDocumentsResponse };
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
        const message = { ...baseMsgCreateDocumentsResponse };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    }
};
const baseMsgUpdateDocuments = { creator: '', id: 0, name: '' };
export const MsgUpdateDocuments = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== 0) {
            writer.uint32(16).uint64(message.id);
        }
        if (message.name !== '') {
            writer.uint32(26).string(message.name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateDocuments };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.id = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgUpdateDocuments };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgUpdateDocuments };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        return message;
    }
};
const baseMsgUpdateDocumentsResponse = {};
export const MsgUpdateDocumentsResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateDocumentsResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgUpdateDocumentsResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgUpdateDocumentsResponse };
        return message;
    }
};
const baseMsgDeleteDocuments = { creator: '', id: 0 };
export const MsgDeleteDocuments = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== 0) {
            writer.uint32(16).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteDocuments };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
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
        const message = { ...baseMsgDeleteDocuments };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
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
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgDeleteDocuments };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    }
};
const baseMsgDeleteDocumentsResponse = {};
export const MsgDeleteDocumentsResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteDocumentsResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgDeleteDocumentsResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgDeleteDocumentsResponse };
        return message;
    }
};
export class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    PutBlock(request) {
        const data = MsgPutBlock.encode(request).finish();
        const promise = this.rpc.request('ElectronicSignaturesIndustries.xdvnode.xdvnode.Msg', 'PutBlock', data);
        return promise.then((data) => MsgPutBlockResponse.decode(new Reader(data)));
    }
    CreateFile(request) {
        const data = MsgCreateFile.encode(request).finish();
        const promise = this.rpc.request('ElectronicSignaturesIndustries.xdvnode.xdvnode.Msg', 'CreateFile', data);
        return promise.then((data) => MsgCreateFileResponse.decode(new Reader(data)));
    }
    CreateDocuments(request) {
        const data = MsgCreateDocuments.encode(request).finish();
        const promise = this.rpc.request('ElectronicSignaturesIndustries.xdvnode.xdvnode.Msg', 'CreateDocuments', data);
        return promise.then((data) => MsgCreateDocumentsResponse.decode(new Reader(data)));
    }
    UpdateDocuments(request) {
        const data = MsgUpdateDocuments.encode(request).finish();
        const promise = this.rpc.request('ElectronicSignaturesIndustries.xdvnode.xdvnode.Msg', 'UpdateDocuments', data);
        return promise.then((data) => MsgUpdateDocumentsResponse.decode(new Reader(data)));
    }
    DeleteDocuments(request) {
        const data = MsgDeleteDocuments.encode(request).finish();
        const promise = this.rpc.request('ElectronicSignaturesIndustries.xdvnode.xdvnode.Msg', 'DeleteDocuments', data);
        return promise.then((data) => MsgDeleteDocumentsResponse.decode(new Reader(data)));
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
const atob = globalThis.atob || ((b64) => globalThis.Buffer.from(b64, 'base64').toString('binary'));
function bytesFromBase64(b64) {
    const bin = atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
        arr[i] = bin.charCodeAt(i);
    }
    return arr;
}
const btoa = globalThis.btoa || ((bin) => globalThis.Buffer.from(bin, 'binary').toString('base64'));
function base64FromBytes(arr) {
    const bin = [];
    for (let i = 0; i < arr.byteLength; ++i) {
        bin.push(String.fromCharCode(arr[i]));
    }
    return btoa(bin.join(''));
}
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
