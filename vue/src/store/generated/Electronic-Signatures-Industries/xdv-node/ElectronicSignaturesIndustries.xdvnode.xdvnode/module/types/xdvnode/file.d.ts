import { Writer, Reader } from 'protobufjs/minimal';
export declare const protobufPackage = "ElectronicSignaturesIndustries.xdvnode.xdvnode";
export interface File {
    creator: string;
    id: number;
    data: Uint8Array;
    contentType: string;
    storageNetworkType: string;
    cid: string;
}
export declare const File: {
    encode(message: File, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): File;
    fromJSON(object: any): File;
    toJSON(message: File): unknown;
    fromPartial(object: DeepPartial<File>): File;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
