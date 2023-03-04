class CaixaRegistradora {
    constructor() {
        this.estoque = []
        this.nome;
        this.itens = []
    }
    adicionarProdutoEstoque(codigoBarra, preco, nome, quantidade) {
        const produto = {
            "codigoBarra": codigoBarra,
            "preco": preco,
            "nome": nome,
            "quantidade": quantidade
        }
        this.estoque.push(produto)

        this.salvaEstoqueLocalStorage(this.estoque);

    }
    salvaEstoqueLocalStorage(estoque) {
        const estoqueJSON = JSON.stringify(estoque);
        localStorage.setItem("estoque", estoqueJSON);
    }

    iniciarAtendimento(nomeCliente) {
        this.nome = nomeCliente
    }

    adicionarItem(codigoBarra, quantidade) {
        const item = {
            "codigoBarra": codigoBarra,
            "quantidade": quantidade
        }
        const produtoEstoque = this.buscaProdutoEstoque(codigoBarra)
        if (produtoEstoque != null) {
            this.itens.push(item)
        } else {
            console.log("Item não cadastrado");
        }

    }
    buscaProdutoEstoque(codigoBarra) {
        const produtoEstoque = this.estoque.find(produto => {
            return produto.codigoBarra == codigoBarra
        })
        return produtoEstoque;
    }

    somaConta() {
        let contador = 0
        const soma = this.itens.reduce((total, item) => total + this.calculaValor(item), contador);
        return soma;
    }

    calculaValor(item) {
        const produtoEstoque = this.buscaProdutoEstoque(item.codigoBarra);
        return produtoEstoque.preco * item.quantidade;
    }

    fecharConta(dinheiro) {
        const troco = this.somaConta() - dinheiro
        this.itens.forEach((item) => {
            const produtoEstoque = this.buscaProdutoEstoque(item.codigoBarra);
            produtoEstoque.quantidade -= item.quantidade;
        })
        this.zeraCaixaRegistradora();
        this.salvaEstoqueLocalStorage(this.estoque);
        return troco;
    }
    
    zeraCaixaRegistradora() {
        this.nome = " ";
        this.itens = [];
    }

}

const caixa = new CaixaRegistradora

//Produtos adicionados em estoque
caixa.adicionarProdutoEstoque(321, 1.99, "absorvente", 5);
caixa.adicionarProdutoEstoque(654, 2.19, "abridor", 5);
caixa.adicionarProdutoEstoque(876, 3.49, "chinelo", 5);

console.log(caixa.estoque);

//Iniciando o atendimento
caixa.iniciarAtendimento("Taelen");

console.log(caixa.nome);

//Adicionando item ao caixa
caixa.adicionarItem(321, 2);
caixa.adicionarItem(876, 2);
caixa.adicionarItem(654, 2);

console.log(caixa.somaConta());

//Finalizando o atendimento
console.log(caixa.fecharConta(50));

//Checando se o caixa está zerado
console.log(caixa.nome);
console.log(caixa.itens);
console.log(caixa.estoque);










