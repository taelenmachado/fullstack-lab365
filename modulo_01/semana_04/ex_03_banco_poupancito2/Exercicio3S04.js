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
    retirada(valor, senha) {
        if (senha === this.#senha) {
            this.saldo = this.saldo - valor;
        } else {
            console.log("Senha incorreta")
        }
    }
}
class ContaPoupanca extends Conta {
    constructor(saldo, senha, juros) {
        super(saldo, senha);
        this.juros = juros;
    }
    atualizaJuros() {
        this.juros = this.saldo*(0.7/100)
        this.saldo = this.saldo + this.juros
    }
}
const contaCorrente = new ContaPoupanca(1000,1234,0.7);

console.log(contaCorrente.saldo);

contaCorrente.atualizaJuros();

console.log(contaCorrente.saldo);

contaCorrente.atualizaJuros();

console.log(contaCorrente.saldo);

contaCorrente.atualizaJuros();

console.log(`O saldo da conta com juros é de R$ ${contaCorrente.saldo.toFixed(2)}`);

