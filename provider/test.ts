import { XDVNodeProvider } from '.'

export class Test {
  static async uploadFile() {
    const client = new XDVNodeProvider()
    await client.createAccount('walletcore', 'abc123456789')
    const provider = await client.createXDVProvider(
      'walletcore',
      'abc123456789',
    )
    const msg = await provider.msgCreateFile({
      creator: 'xdv1k8pm7722uewy5etnmt9ecywt9sem5dcer5ltue',
      contentType: 'text/plain',
      data: Buffer.from('hello world'),
    })
    const fee = [];
    const result = await provider.signAndBroadcast([msg], {
      fee: { amount: fee, gas: '200000' },
    })

    console.log(result)
  }
}

;(async function bootstrap() {
  await Test.uploadFile()
})()
