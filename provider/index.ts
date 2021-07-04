require('dotenv').config()

import { DirectSecp256k1HdWallet, Registry } from '@cosmjs/proto-signing'
import { defaultRegistryTypes, SigningStargateClient, StargateClient } from '@cosmjs/stargate'
import { MsgCreateFile,  MsgClientImpl } from './protolib/xdvnode/tx' // Replace with your own Msg import

import { KeystoreDbModel, Wallet } from 'xdv-universal-wallet-core'
import { Tendermint34Client } from '@cosmjs/tendermint-rpc'
import { txClient } from './genclient'

export class XDVNodeProvider {
  registry: Registry
  wallet: Wallet
  /**
   * Register Msg imports
   */
  constructor() {
    this.wallet = new Wallet({ isWeb: false })
    this.registry = new Registry([
      ...defaultRegistryTypes,
      [
        '/ElectronicSignaturesIndustries.xdvnode.xdvnode.MsgCreateFile',
        MsgCreateFile,
      ],
    ] as any)
  }

  /**
   * Creates a wallet account
   * @param accountName Account name
   * @param passphrase Passphrase
   */
  async createAccount(accountName: string, passphrase: string) {
    await this.wallet.open(accountName, passphrase)
    await this.wallet.enrollAccount({
      accountName,
    })

  }

  /**
   * Creates a wallet
   * @param accountName Account name
   * @param passphrase Passphrase
   * @returns
   */
  async createWallet(accountName: string, passphrase: string) {
    await this.wallet.open(accountName, passphrase)

    const acct = (await this.wallet.getAccount()) as any
    let walletId

    if (acct.keystores.length === 0) {
      //  TODO: Mnemonic must come from XDV Node Provider because it is using a custom chain
      walletId = await this.wallet.addWallet()
    } else {
      walletId = acct.keystores[0].walletId
    }

    const wallet = await this.wallet.createEd25519({
      passphrase: passphrase,
      walletId: walletId,
    })

    return wallet as any
  }

  /**
   * Imports an existing seed phrase
   * @param accountName Account name
   * @param passphrase Passphrase
   * @param mnemonic Seed phrase
   * @returns
   */
  async importWallet(
    accountName: string,
    passphrase: string,
    mnemonic: string,
  ) {
    await this.wallet.open(accountName, passphrase)

    const acct = (await this.wallet.getAccount()) as any

    if (acct.keystores.length > 0) {
      // already imported
      return this.wallet
    }

    const walletId = await this.wallet.addWallet({
      mnemonic,
    })

    const wallet = await this.wallet.createEd25519({
      passphrase: passphrase,
      walletId: walletId,
    })

    return wallet as any
  }

  async createXDVProvider(accountName: string, passphrase: string) {
    const acct = (await this.wallet.getAccount()) as any
    let walletId = ''
    if (acct.keystores.length === 0) {
      //  TODO: Mnemonic must come from XDV Node Provider because it is using a custom chain
      walletId = await this.wallet.addWallet({
        mnemonic: process.env.ALICE_M,
      })
    } else {
      walletId = acct.keystores[0].walletId
    }

    const keystore = await acct.keystores.find(
      (k: KeystoreDbModel) => k.walletId === walletId,
    )

    console.log(keystore)
    const signer = await DirectSecp256k1HdWallet.fromMnemonic(
      keystore.mnemonic,
      { prefix: 'xdv' },
    )
    
    const client = await txClient(
      signer,
    )

//     const msg = await txClient.msgCreateFile(value)
//     const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
// gas: "200000" }, memo})

    return client
  }
}
