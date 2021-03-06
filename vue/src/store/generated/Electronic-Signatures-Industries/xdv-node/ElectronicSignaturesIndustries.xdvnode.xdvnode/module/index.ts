// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreateDocuments } from "./types/xdvnode/tx";
import { MsgUpdateDocuments } from "./types/xdvnode/tx";
import { MsgDeleteDocuments } from "./types/xdvnode/tx";
import { MsgPutBlock } from "./types/xdvnode/tx";
import { MsgCreateFile } from "./types/xdvnode/tx";


const types = [
  ["/ElectronicSignaturesIndustries.xdvnode.xdvnode.MsgCreateDocuments", MsgCreateDocuments],
  ["/ElectronicSignaturesIndustries.xdvnode.xdvnode.MsgUpdateDocuments", MsgUpdateDocuments],
  ["/ElectronicSignaturesIndustries.xdvnode.xdvnode.MsgDeleteDocuments", MsgDeleteDocuments],
  ["/ElectronicSignaturesIndustries.xdvnode.xdvnode.MsgPutBlock", MsgPutBlock],
  ["/ElectronicSignaturesIndustries.xdvnode.xdvnode.MsgCreateFile", MsgCreateFile],
  
];
export const MissingWalletError = new Error("wallet is required");

const registry = new Registry(<any>types);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
}

interface SignAndBroadcastOptions {
  fee: StdFee,
  memo?: string
}

const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }) => {
  if (!wallet) throw MissingWalletError;

  const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions = {fee: defaultFee, memo: ""}) => client.signAndBroadcast(address, msgs, fee,memo),
    msgCreateDocuments: (data: MsgCreateDocuments): EncodeObject => ({ typeUrl: "/ElectronicSignaturesIndustries.xdvnode.xdvnode.MsgCreateDocuments", value: data }),
    msgUpdateDocuments: (data: MsgUpdateDocuments): EncodeObject => ({ typeUrl: "/ElectronicSignaturesIndustries.xdvnode.xdvnode.MsgUpdateDocuments", value: data }),
    msgDeleteDocuments: (data: MsgDeleteDocuments): EncodeObject => ({ typeUrl: "/ElectronicSignaturesIndustries.xdvnode.xdvnode.MsgDeleteDocuments", value: data }),
    msgPutBlock: (data: MsgPutBlock): EncodeObject => ({ typeUrl: "/ElectronicSignaturesIndustries.xdvnode.xdvnode.MsgPutBlock", value: data }),
    msgCreateFile: (data: MsgCreateFile): EncodeObject => ({ typeUrl: "/ElectronicSignaturesIndustries.xdvnode.xdvnode.MsgCreateFile", value: data }),
    
  };
};

interface QueryClientOptions {
  addr: string
}

const queryClient = async ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

export {
  txClient,
  queryClient,
};
