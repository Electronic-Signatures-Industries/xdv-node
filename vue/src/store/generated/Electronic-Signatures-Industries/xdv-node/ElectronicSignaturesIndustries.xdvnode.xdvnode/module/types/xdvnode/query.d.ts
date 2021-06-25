import { Reader, Writer } from 'protobufjs/minimal';
import { File } from '../xdvnode/file';
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination';
import { Documents } from '../xdvnode/documents';
export declare const protobufPackage = "ElectronicSignaturesIndustries.xdvnode.xdvnode";
/** this line is used by starport scaffolding # 3 */
export interface QueryGetFileRequest {
    cid: string;
}
export interface QueryGetFileResponse {
    File: File | undefined;
}
export interface QueryAllFileRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllFileResponse {
    File: File[];
    pagination: PageResponse | undefined;
}
export interface QueryGetDocumentsRequest {
    id: number;
}
export interface QueryGetDocumentsResponse {
    Documents: Documents | undefined;
}
export interface QueryAllDocumentsRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllDocumentsResponse {
    Documents: Documents[];
    pagination: PageResponse | undefined;
}
export declare const QueryGetFileRequest: {
    encode(message: QueryGetFileRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetFileRequest;
    fromJSON(object: any): QueryGetFileRequest;
    toJSON(message: QueryGetFileRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetFileRequest>): QueryGetFileRequest;
};
export declare const QueryGetFileResponse: {
    encode(message: QueryGetFileResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetFileResponse;
    fromJSON(object: any): QueryGetFileResponse;
    toJSON(message: QueryGetFileResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetFileResponse>): QueryGetFileResponse;
};
export declare const QueryAllFileRequest: {
    encode(message: QueryAllFileRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllFileRequest;
    fromJSON(object: any): QueryAllFileRequest;
    toJSON(message: QueryAllFileRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllFileRequest>): QueryAllFileRequest;
};
export declare const QueryAllFileResponse: {
    encode(message: QueryAllFileResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllFileResponse;
    fromJSON(object: any): QueryAllFileResponse;
    toJSON(message: QueryAllFileResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllFileResponse>): QueryAllFileResponse;
};
export declare const QueryGetDocumentsRequest: {
    encode(message: QueryGetDocumentsRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetDocumentsRequest;
    fromJSON(object: any): QueryGetDocumentsRequest;
    toJSON(message: QueryGetDocumentsRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetDocumentsRequest>): QueryGetDocumentsRequest;
};
export declare const QueryGetDocumentsResponse: {
    encode(message: QueryGetDocumentsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetDocumentsResponse;
    fromJSON(object: any): QueryGetDocumentsResponse;
    toJSON(message: QueryGetDocumentsResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetDocumentsResponse>): QueryGetDocumentsResponse;
};
export declare const QueryAllDocumentsRequest: {
    encode(message: QueryAllDocumentsRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllDocumentsRequest;
    fromJSON(object: any): QueryAllDocumentsRequest;
    toJSON(message: QueryAllDocumentsRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllDocumentsRequest>): QueryAllDocumentsRequest;
};
export declare const QueryAllDocumentsResponse: {
    encode(message: QueryAllDocumentsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllDocumentsResponse;
    fromJSON(object: any): QueryAllDocumentsResponse;
    toJSON(message: QueryAllDocumentsResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllDocumentsResponse>): QueryAllDocumentsResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Queries a file by id. */
    File(request: QueryGetFileRequest): Promise<QueryGetFileResponse>;
    /** Queries a documents by id. */
    Documents(request: QueryGetDocumentsRequest): Promise<QueryGetDocumentsResponse>;
    /** Queries a list of documents items. */
    DocumentsAll(request: QueryAllDocumentsRequest): Promise<QueryAllDocumentsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    File(request: QueryGetFileRequest): Promise<QueryGetFileResponse>;
    Documents(request: QueryGetDocumentsRequest): Promise<QueryGetDocumentsResponse>;
    DocumentsAll(request: QueryAllDocumentsRequest): Promise<QueryAllDocumentsResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
