let inputNumero = document.getElementById("numero");
let button = document.getElementById("buttonCalcular");
let tabela = document.getElementById("tabela");

button.addEventListener("click", calcula)

function calcula() {
    let valorPao = inputNumero.value
    let tabeladeprecos = " "
    for (i=1; i<=50; i++) {
        let resultado = valorPao*i
        tabeladeprecos += (i + " pão = R$ " + resultado.toFixed(2)) + "<br>"
    }

    tabela.innerHTML = tabeladeprecos

}




