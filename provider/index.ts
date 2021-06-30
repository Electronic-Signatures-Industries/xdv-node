import { DirectSecp256k1HdWallet, Registry } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, SigningStargateClient } from "@cosmjs/stargate";
import { MsgXxx } from "./path/to/generated/codec"; // Replace with your own Msg import

import { Wallet } from 'xdv-universal-wallet-core'

export class XDVNodeProvider {
  async createAccount(
    accountName: string,
    passphrase: string,
  ) {
    const xdvWallet = new Wallet({ isWeb: true })
    await xdvWallet.open(accountName, passphrase)
    await xdvWallet.enrollAccount({
      passphrase,
      accountName,
    })
  }

  async createWallet(accountName: string, passphrase: string){
    const xdvWallet = new Wallet({ isWeb: true })
    await xdvWallet.open(accountName, passphrase)
    return xdvWallet.addWallet()
  }

  async importWallet(accountName: string, passphrase: string, mnemonic: string){
    const xdvWallet = new Wallet({ isWeb: true })
    await xdvWallet.open(accountName, passphrase)
    return xdvWallet.addWallet({
      mnemonic
    })
  }

  async createXDVProvider(){
    
    const myRegistry = new Registry([
      ...defaultRegistryTypes,
      ["/my.custom.MsgXxx", MsgXxx], // Replace with your own type URL and Msg class
    ]);
    const mnemonic = // Replace with your own mnemonic
      "economy stock theory fatal elder harbor betray wasp final emotion task crumble siren bottom lizard educate guess current outdoor pair theory focus wife stone";
    
    // Inside an async function...
    const signer = await DirectSecp256k1HdWallet.fromMnemonic(
      mnemonic,
      { prefix: "myprefix" }, // Replace with your own Bech32 address prefix
    );
    const client = await SigningStargateClient.connectWithSigner(
      "my.endpoint.com", // Replace with your own RPC endpoint
      signer,
      {
        registry: myRegistry,
      },
    );
    
  }
}
