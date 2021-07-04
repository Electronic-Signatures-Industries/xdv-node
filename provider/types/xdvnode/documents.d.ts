import { Writer, Reader } from 'protobufjs/minimal';
export declare const protobufPackage = "ElectronicSignaturesIndustries.xdvnode.xdvnode";
export interface Documents {
    creator: string;
    id: number;
    name: string;
    hash: string;
    lastModified: number;
    contentType: string;
    signature: string;
    network: string;
    did: string;
    alg: string;
    pinned: boolean;
    tokenized: boolean;
    metadataURI: string;
}
export declare const Documents: {
    encode(message: Documents, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Documents;
    fromJSON(object: any): Documents;
    toJSON(message: Documents): unknown;
    fromPartial(object: DeepPartial<Documents>): Documents;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
