class CaixaRegistradora {
    constructor() {
        this.estoque = []
        this.nome;
        this.itens = []
    }
    adicionarProduto(codigoBarra, preco, nome) {
        const produto = {
            "codigoBarra": codigoBarra,
            "preco": preco,
            "nome": nome
        }
        this.estoque.push(produto)
    }
    iniciarAtendimento(nomeCliente) {
        this.nome = nomeCliente
    }

    adicionarItem(codigoBarra, quantidade) {
        const item = {
            "codigoBarra": codigoBarra,
            "quantidade": quantidade
        }
        const leitor = this.estoque.find(produto => {
            return produto.codigoBarra == codigoBarra
        })
        if (leitor != null) {
            this.itens.push(item)
        } else {
            console.log("Item não cadastrado");
        }
        
    }

    somaConta() {
        let contador = 0
        const soma = this.itens.reduce((total,item) => total + this.calculaValor(item), contador);
        return soma;
    }

    calculaValor(item) {
        const buscaProduto = this.estoque.find(produto => {
            return produto.codigoBarra == item.codigoBarra
        })
        return buscaProduto.preco*item.quantidade;
    }

    fecharConta(dinheiro) {
        const troco = this.somaConta() - dinheiro
        this.zeraCaixaRegistradora();
        return troco ;
    }

    zeraCaixaRegistradora() {
        this.nome = " ";
        this.itens = [];
    }

}

const caixa = new CaixaRegistradora

//Produtos adicionados em estoque
caixa.adicionarProduto(321,1.99,"absorvente");
caixa.adicionarProduto(654,2.19,"abridor");
caixa.adicionarProduto(876,3.49,"chinelo");

console.log(caixa.estoque);

//Iniciando o atendimento
caixa.iniciarAtendimento("Taelen");

console.log(caixa.nome);

//Adicionando item ao caixa
caixa.adicionarItem(321,2);
caixa.adicionarItem(876,1);
caixa.adicionarItem(987,3);

console.log(caixa.somaConta());

//Finalizando o atendimento
console.log(caixa.fecharConta(50));

//Checando se o caixa está zerado
console.log(caixa.nome);
console.log(caixa.itens);










