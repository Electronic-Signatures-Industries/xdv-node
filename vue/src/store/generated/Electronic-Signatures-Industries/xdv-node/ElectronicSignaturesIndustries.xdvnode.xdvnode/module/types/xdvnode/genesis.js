/* eslint-disable */
import * as Long from 'long';
import { util, configure, Writer, Reader } from 'protobufjs/minimal';
import { Documents } from '../xdvnode/documents';
export const protobufPackage = 'ElectronicSignaturesIndustries.xdvnode.xdvnode';
const baseGenesisState = { documentsCount: 0 };
export const GenesisState = {
    encode(message, writer = Writer.create()) {
        for (const v of message.documentsList) {
            Documents.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.documentsCount !== 0) {
            writer.uint32(16).uint64(message.documentsCount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenesisState };
        message.documentsList = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.documentsList.push(Documents.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.documentsCount = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGenesisState };
        message.documentsList = [];
        if (object.documentsList !== undefined && object.documentsList !== null) {
            for (const e of object.documentsList) {
                message.documentsList.push(Documents.fromJSON(e));
            }
        }
        if (object.documentsCount !== undefined && object.documentsCount !== null) {
            message.documentsCount = Number(object.documentsCount);
        }
        else {
            message.documentsCount = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.documentsList) {
            obj.documentsList = message.documentsList.map((e) => (e ? Documents.toJSON(e) : undefined));
        }
        else {
            obj.documentsList = [];
        }
        message.documentsCount !== undefined && (obj.documentsCount = message.documentsCount);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGenesisState };
        message.documentsList = [];
        if (object.documentsList !== undefined && object.documentsList !== null) {
            for (const e of object.documentsList) {
                message.documentsList.push(Documents.fromPartial(e));
            }
        }
        if (object.documentsCount !== undefined && object.documentsCount !== null) {
            message.documentsCount = object.documentsCount;
        }
        else {
            message.documentsCount = 0;
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
