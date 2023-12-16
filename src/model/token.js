const CryptumSDK = require('cryptum-sdk')
const protocol = 'POLYGON'

const sdk = new CryptumSDK({
    environment: "testnet", // 'testnet' or 'development', 'mainnet' or 'production'
    apiKey: 'Fulh8JsFaUkabf4pWzm0tqJbMBon47zt',
})

const wallet = require("./wallet.json")

const createToken = async () => {
    const { hash } = await sdk.token.create({
        wallet,
        name: 'HACKATHON',
        symbol: 'HACK2',
        decimals: 18,
        amount: '1000000',
        protocol
    })
    console.log(hash)
}

// hash = 
const getContractByHash = async (hash) => {
    const { contractAddress } = await sdk.transaction.getTransactionReceiptByHash({
        protocol,
        hash
    })

    console.log(contractAddress)
}

// contractAddress = 
const mintToken =  async (contractAddress) => {

     const { hash } = await sdk.token.mint({
        protocol,
        wallet,
        destination: wallet.address,
        amount: 100,
        token: contractAddress
     })

    console.log(hash)
}

const burnToken = async (contractAddress) => {
    const { hash } = await sdk.token.burn({
        protocol,
        amount: 100,
        token: contractAddress,
        wallet
    })

    console.log(hash)
}

const transferToken = async (contractAddress, destination) => {

    const { hash } = await sdk.token.transfer({
        protocol,
        wallet,
        token: contractAddress,
        amount: "100",
        destination
    })

    console.log(hash)
}

const contractAddress = "0x2e251c2571bbb825ce22e22dded939aa8f229b23"
// createToken()
getContractByHash("0xb3c1edac43d2bd2858cf52dac9c529cab0b3788af8c0b6108fe7a20ce2d42733")
// mintToken(contractAddress)
// burnToken(contractAddress)
// transferToken(contractAddress, "0xB9F97A89a378aaa1A1E6811Eb17807CC60411322")