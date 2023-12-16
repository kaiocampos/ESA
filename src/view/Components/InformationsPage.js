import { createNewToken, discartToken, getContract, paimentHandler, transferTransaction } from '../../controller/pg';
import '../../style/Header.css';

import { usersMock, studentWallet  } from '../../model/mock';

const originWallet = require("../../model/wallet.json")


function InformationsPage() {
    const contractAddress = ''
    const wallet = originWallet
    const amount = 500
    const isUser = false
    const destination = ''
    return (
        <section>
            <button onClick={paimentHandler(contractAddress, wallet, amount, isUser)}>
                Pagamento
            </button>
            <button onClick={createNewToken}>
                Gerar Token
            </button>
            <button onClick={getContract}>
                Novo Contrato
            </button>
            <button onClick={transferTransaction(contractAddress, destination)}>
                Transferir
            </button>
            <button onClick={discartToken(contractAddress)}>
                Excluir
            </button>
        </section>

    );
}

export default InformationsPage;