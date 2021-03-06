// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
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
const registry = new Registry(types);
const defaultFee = {
    amount: [],
    gas: "200000",
};
const txClient = async (wallet, { addr: addr } = { addr: "http://localhost:26657" }) => {
    if (!wallet)
        throw MissingWalletError;
    const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
    const { address } = (await wallet.getAccounts())[0];
    return {
        signAndBroadcast: (msgs, { fee, memo } = { fee: defaultFee, memo: "" }) => client.signAndBroadcast(address, msgs, fee, memo),
        msgCreateDocuments: (data) => ({ typeUrl: "/ElectronicSignaturesIndustries.xdvnode.xdvnode.MsgCreateDocuments", value: data }),
        msgUpdateDocuments: (data) => ({ typeUrl: "/ElectronicSignaturesIndustries.xdvnode.xdvnode.MsgUpdateDocuments", value: data }),
        msgDeleteDocuments: (data) => ({ typeUrl: "/ElectronicSignaturesIndustries.xdvnode.xdvnode.MsgDeleteDocuments", value: data }),
        msgPutBlock: (data) => ({ typeUrl: "/ElectronicSignaturesIndustries.xdvnode.xdvnode.MsgPutBlock", value: data }),
        msgCreateFile: (data) => ({ typeUrl: "/ElectronicSignaturesIndustries.xdvnode.xdvnode.MsgCreateFile", value: data }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
