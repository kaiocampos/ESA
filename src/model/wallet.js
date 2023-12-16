const CryptumSDK = require('cryptum-sdk')
const { generatePath } = require('react-router')
const protocol = 'POLYGON'
const mnemonic = "argue shell coin solar answer pyramid civil mix vendor spike kit design"

const sdk = new CryptumSDK({
    environment: "testnet", // 'testnet' or 'development', 'mainnet' or 'production'
    apiKey: 'Fulh8JsFaUkabf4pWzm0tqJbMBon47zt',
})

const generateWallet = async () => {
    const Wallet = await sdk.wallet.generateWallet({
        protocol,
        mnemonic
    })

    console.log(Wallet)
}


const getBalance = async (token) => {
    const wallet = require("./wallet.json")
    const balance = await sdk.wallet.getWalletInfo({
        address: wallet.address,
        tokenAddresses: {token},
        protocol
    })

    return balance
}

// export { generateWallet, getBalance }
generateWallet()