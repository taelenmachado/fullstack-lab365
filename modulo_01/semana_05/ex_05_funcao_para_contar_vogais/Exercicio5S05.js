function contaVogais(string) {
    let letras = string.toLowerCase().split("")
    let vogais = ['a', 'e', 'i', 'o', 'u']
    let totalVogais = 0


    for (i = 0; i < string.length; i++) {
        let letra = letras[i]

        if (vogais.includes(letra)) {
            totalVogais++;
        }

    }
    return totalVogais;

}


let resultado = contaVogais("ZOOLOGICO")


console.log(resultado);
