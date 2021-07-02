import { DirectSecp256k1HdWallet, Registry } from '@cosmjs/proto-signing'
import { defaultRegistryTypes, SigningStargateClient } from '@cosmjs/stargate'
import { MsgCreateFile } from './protolib/xdvnode/tx' // Replace with your own Msg import

import { KeystoreDbModel, Wallet } from 'xdv-universal-wallet-core'

export class XDVNodeProvider {
  registry: Registry

  /**
   * Register Msg imports
   */
  constructor() {
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
    const xdvWallet = new Wallet({ isWeb: true })
    await xdvWallet.open(accountName, passphrase)
    await xdvWallet.enrollAccount({
      passphrase,
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
    const xdvWallet = new Wallet({ isWeb: true })
    await xdvWallet.open(accountName, passphrase)

    const acct = (await xdvWallet.getAccount()) as any
    let walletId

    if (acct.keystores.length === 0) {
      //  TODO: Mnemonic must come from XDV Node Provider because it is using a custom chain
      walletId = await xdvWallet.addWallet()
    } else {
      walletId = acct.keystores[0].walletId
    }

    const wallet = await xdvWallet.createEd25519({
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
    const xdvWallet = new Wallet({ isWeb: true })
    await xdvWallet.open(accountName, passphrase)

    const acct = (await xdvWallet.getAccount()) as any

    if (acct.keystores.length > 0) {
      // already imported
      return xdvWallet
    }

    const walletId = await xdvWallet.addWallet({
      mnemonic,
    })

    const wallet = await xdvWallet.createEd25519({
      passphrase: passphrase,
      walletId: walletId,
    })

    return wallet as any
  }

  async createXDVProvider(
    accountName: string,
    passphrase: string,
  ) {
    const xdvWallet = new Wallet({ isWeb: true })
    await xdvWallet.open(accountName, passphrase)

    const acct = (await xdvWallet.getAccount()) as any
    let walletId = ''

    if (acct.keystores.length === 0) {
      //  TODO: Mnemonic must come from XDV Node Provider because it is using a custom chain
      walletId = await xdvWallet.addWallet()
    } else {
      walletId = acct.keystores[0].walletId
    }

    const keystore = await acct.keystores.find((k: KeystoreDbModel) => k.walletId === walletId)

    const signer = await DirectSecp256k1HdWallet.fromMnemonic(
      keystore[0].mnemonic,
      { prefix: 'xdv' },
    )
    const client = await SigningStargateClient.connectWithSigner(
      'my.endpoint.com', // Replace with your own RPC endpoint
      signer,
      {
        registry: myRegistry,
      },
    )
  }
}
