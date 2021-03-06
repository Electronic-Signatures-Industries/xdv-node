/* eslint-disable */
import * as Long from 'long';
import { util, configure, Writer, Reader } from 'protobufjs/minimal';
export const protobufPackage = 'ElectronicSignaturesIndustries.xdvnode.xdvnode';
const baseDocuments = { creator: '', id: 0, name: '', hash: '', lastModified: 0, signature: '', did: '', metadataURI: '' };
export const Documents = {
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
        if (message.hash !== '') {
            writer.uint32(34).string(message.hash);
        }
        if (message.lastModified !== 0) {
            writer.uint32(40).uint64(message.lastModified);
        }
        if (message.signature !== '') {
            writer.uint32(50).string(message.signature);
        }
        if (message.did !== '') {
            writer.uint32(58).string(message.did);
        }
        if (message.metadataURI !== '') {
            writer.uint32(66).string(message.metadataURI);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDocuments };
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
                case 4:
                    message.hash = reader.string();
                    break;
                case 5:
                    message.lastModified = longToNumber(reader.uint64());
                    break;
                case 6:
                    message.signature = reader.string();
                    break;
                case 7:
                    message.did = reader.string();
                    break;
                case 8:
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
        const message = { ...baseDocuments };
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
        if (object.signature !== undefined && object.signature !== null) {
            message.signature = String(object.signature);
        }
        else {
            message.signature = '';
        }
        if (object.did !== undefined && object.did !== null) {
            message.did = String(object.did);
        }
        else {
            message.did = '';
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
        message.id !== undefined && (obj.id = message.id);
        message.name !== undefined && (obj.name = message.name);
        message.hash !== undefined && (obj.hash = message.hash);
        message.lastModified !== undefined && (obj.lastModified = message.lastModified);
        message.signature !== undefined && (obj.signature = message.signature);
        message.did !== undefined && (obj.did = message.did);
        message.metadataURI !== undefined && (obj.metadataURI = message.metadataURI);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseDocuments };
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
        if (object.signature !== undefined && object.signature !== null) {
            message.signature = object.signature;
        }
        else {
            message.signature = '';
        }
        if (object.did !== undefined && object.did !== null) {
            message.did = object.did;
        }
        else {
            message.did = '';
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
