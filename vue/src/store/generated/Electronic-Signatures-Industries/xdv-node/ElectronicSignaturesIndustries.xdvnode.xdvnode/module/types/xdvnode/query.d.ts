import { Reader, Writer } from 'protobufjs/minimal';
import { Documents } from '../xdvnode/documents';
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination';
export declare const protobufPackage = "ElectronicSignaturesIndustries.xdvnode.xdvnode";
/** this line is used by starport scaffolding # 3 */
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
    /** Queries a documents by id. */
    Documents(request: QueryGetDocumentsRequest): Promise<QueryGetDocumentsResponse>;
    /** Queries a list of documents items. */
    DocumentsAll(request: QueryAllDocumentsRequest): Promise<QueryAllDocumentsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
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
