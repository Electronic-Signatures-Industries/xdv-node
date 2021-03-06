import { StdFee } from "@cosmjs/launchpad";
import { OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreateDocuments } from "./types/xdvnode/tx";
import { MsgUpdateDocuments } from "./types/xdvnode/tx";
import { MsgDeleteDocuments } from "./types/xdvnode/tx";
import { MsgPutBlock } from "./types/xdvnode/tx";
import { MsgCreateFile } from "./types/xdvnode/tx";
export declare const MissingWalletError: Error;
interface TxClientOptions {
    addr: string;
}
interface SignAndBroadcastOptions {
    fee: StdFee;
    memo?: string;
}
declare const txClient: (wallet: OfflineSigner, { addr: addr }?: TxClientOptions) => Promise<{
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }?: SignAndBroadcastOptions) => Promise<import("@cosmjs/stargate").BroadcastTxResponse>;
    msgCreateDocuments: (data: MsgCreateDocuments) => EncodeObject;
    msgUpdateDocuments: (data: MsgUpdateDocuments) => EncodeObject;
    msgDeleteDocuments: (data: MsgDeleteDocuments) => EncodeObject;
    msgPutBlock: (data: MsgPutBlock) => EncodeObject;
    msgCreateFile: (data: MsgCreateFile) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
