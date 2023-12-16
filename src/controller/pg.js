import { paiment, createToken, transferToken, burnToken, getContractByHash } from '../model/token.js';

function paimentHandler(contractAddress, wallet, amount, isUser) {
    const adress = wallet.address
    if (isUser) {
        paiment(contractAddress, adress, amount)
    }
    paiment(contractAddress, adress, amount)
}

function createNewToken() {
    createToken()
}

function getContract() {
    getContractByHash()
}

function transferTransaction(contractAddress, destination) {
    transferToken(contractAddress, destination)
}

function discartToken(contractAddress) {
    burnToken(contractAddress)
}

export { paimentHandler, createNewToken, getContract, transferTransaction, discartToken }