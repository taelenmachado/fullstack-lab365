let inputNumero = document.getElementById("numero"); 
let button = document.getElementById("buttonCalcular");
let resposta = document.getElementById("resposta");

button.addEventListener("click", tabuada)

function tabuada () {
    let valorTabuada = inputNumero.value 
    let tabuadaInteira = " "
    for(i=1; i<=10; i++) {
        let resultado = valorTabuada*i
        tabuadaInteira += (i + "*" + valorTabuada + "=" + resultado) + "<br>"
    }    

    resposta.innerHTML = tabuadaInteira 
} 





