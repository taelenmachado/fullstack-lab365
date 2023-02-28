class Conta {
    saldo;
    #senha;
    constructor(saldo, senha) {
        this.saldo = saldo;
        this.#senha = senha;
    }
    deposito(valor) {
        this.saldo = this.saldo + valor;
    }
    retirada(valor,senha) {
        if (senha === this.#senha) {
            this.saldo = this.saldo - valor;
        } else {
            console.log("Senha incorreta")
        }
    }
}

const contaCorrente = new Conta(500,1234)

//Adicionando valor na conta
contaCorrente.deposito(500);

//Verificando saldo em conta
console.log(contaCorrente.saldo);

//Retirando valor da conta
contaCorrente.retirada(300,1234);

//Conferindo saldo em conta
console.log(contaCorrente.saldo); 





