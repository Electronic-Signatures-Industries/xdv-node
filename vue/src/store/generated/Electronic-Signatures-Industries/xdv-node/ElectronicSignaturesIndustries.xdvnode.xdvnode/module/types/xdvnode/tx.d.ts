import { Reader, Writer } from 'protobufjs/minimal';
export declare const protobufPackage = "ElectronicSignaturesIndustries.xdvnode.xdvnode";
/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreateDocuments {
    creator: string;
    name: string;
}
export interface MsgCreateDocumentsResponse {
    id: number;
}
export interface MsgUpdateDocuments {
    creator: string;
    id: number;
    name: string;
}
export interface MsgUpdateDocumentsResponse {
}
export interface MsgDeleteDocuments {
    creator: string;
    id: number;
}
export interface MsgDeleteDocumentsResponse {
}
export declare const MsgCreateDocuments: {
    encode(message: MsgCreateDocuments, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateDocuments;
    fromJSON(object: any): MsgCreateDocuments;
    toJSON(message: MsgCreateDocuments): unknown;
    fromPartial(object: DeepPartial<MsgCreateDocuments>): MsgCreateDocuments;
};
export declare const MsgCreateDocumentsResponse: {
    encode(message: MsgCreateDocumentsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateDocumentsResponse;
    fromJSON(object: any): MsgCreateDocumentsResponse;
    toJSON(message: MsgCreateDocumentsResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateDocumentsResponse>): MsgCreateDocumentsResponse;
};
export declare const MsgUpdateDocuments: {
    encode(message: MsgUpdateDocuments, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateDocuments;
    fromJSON(object: any): MsgUpdateDocuments;
    toJSON(message: MsgUpdateDocuments): unknown;
    fromPartial(object: DeepPartial<MsgUpdateDocuments>): MsgUpdateDocuments;
};
export declare const MsgUpdateDocumentsResponse: {
    encode(_: MsgUpdateDocumentsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateDocumentsResponse;
    fromJSON(_: any): MsgUpdateDocumentsResponse;
    toJSON(_: MsgUpdateDocumentsResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateDocumentsResponse>): MsgUpdateDocumentsResponse;
};
export declare const MsgDeleteDocuments: {
    encode(message: MsgDeleteDocuments, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteDocuments;
    fromJSON(object: any): MsgDeleteDocuments;
    toJSON(message: MsgDeleteDocuments): unknown;
    fromPartial(object: DeepPartial<MsgDeleteDocuments>): MsgDeleteDocuments;
};
export declare const MsgDeleteDocumentsResponse: {
    encode(_: MsgDeleteDocumentsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteDocumentsResponse;
    fromJSON(_: any): MsgDeleteDocumentsResponse;
    toJSON(_: MsgDeleteDocumentsResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteDocumentsResponse>): MsgDeleteDocumentsResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    /** this line is used by starport scaffolding # proto/tx/rpc */
    CreateDocuments(request: MsgCreateDocuments): Promise<MsgCreateDocumentsResponse>;
    UpdateDocuments(request: MsgUpdateDocuments): Promise<MsgUpdateDocumentsResponse>;
    DeleteDocuments(request: MsgDeleteDocuments): Promise<MsgDeleteDocumentsResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreateDocuments(request: MsgCreateDocuments): Promise<MsgCreateDocumentsResponse>;
    UpdateDocuments(request: MsgUpdateDocuments): Promise<MsgUpdateDocumentsResponse>;
    DeleteDocuments(request: MsgDeleteDocuments): Promise<MsgDeleteDocumentsResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
