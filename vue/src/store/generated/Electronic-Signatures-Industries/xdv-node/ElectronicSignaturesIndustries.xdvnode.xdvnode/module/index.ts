// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgDeleteDocuments } from "./types/xdvnode/tx";
import { MsgCreateDocuments } from "./types/xdvnode/tx";
import { MsgUpdateDocuments } from "./types/xdvnode/tx";


const types = [
  ["/ElectronicSignaturesIndustries.xdvnode.xdvnode.MsgDeleteDocuments", MsgDeleteDocuments],
  ["/ElectronicSignaturesIndustries.xdvnode.xdvnode.MsgCreateDocuments", MsgCreateDocuments],
  ["/ElectronicSignaturesIndustries.xdvnode.xdvnode.MsgUpdateDocuments", MsgUpdateDocuments],
  
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
    msgDeleteDocuments: (data: MsgDeleteDocuments): EncodeObject => ({ typeUrl: "/ElectronicSignaturesIndustries.xdvnode.xdvnode.MsgDeleteDocuments", value: data }),
    msgCreateDocuments: (data: MsgCreateDocuments): EncodeObject => ({ typeUrl: "/ElectronicSignaturesIndustries.xdvnode.xdvnode.MsgCreateDocuments", value: data }),
    msgUpdateDocuments: (data: MsgUpdateDocuments): EncodeObject => ({ typeUrl: "/ElectronicSignaturesIndustries.xdvnode.xdvnode.MsgUpdateDocuments", value: data }),
    
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
