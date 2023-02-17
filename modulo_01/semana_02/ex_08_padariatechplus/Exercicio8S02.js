/* 
Lojas Tabajara
Produto 1: R$ 2.20
Produto 2: R$ 5.80
Produto 3: R$ 0
Total: R$ 8.00
Dinheiro: R$ 20.00
Troco: R$ 11.00 
*/

let inputProduto = document.getElementById("produto");
let buttonAdicionar = document.getElementById("adicionar");
let compra = document.getElementById("compra");
let total = document.getElementById("total")

buttonAdicionar.addEventListener("click", recebeValor)

let produtos = []

function finalizaCompra() {
    let soma = produtos.reduce((total, quantidade) => total + quantidade);
    console.log(soma);
    total.innerHTML = soma + " reais";

}

function recebeValor() {
    if (inputProduto.value == 0) {
        finalizaCompra();
        let valor = window.prompt("Compra finalizada! Insira o valor")
        let soma = produtos.reduce((total, quantidade) => total + quantidade);
        let calculo = valor - soma
        alert("Seu troco é:  " + calculo + " reais")
    }

    produtos.push(parseFloat(inputProduto.value));
    console.log(produtos);

    exibeTela();
}

function exibeTela() {
    let valorProduto = " "
    produtos.forEach((produto) => {
        valorProduto += produto + " reais" + "<br>"
    });

    compra.innerHTML = valorProduto;

}

exibeTela();





