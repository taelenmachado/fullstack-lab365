function exibirDados() {
    const crescente = ['Pedro', 'José', 'Aderbal', 'Danilo', 'Luisa', 'Vitória']
    const decrescente = ['Banana', 'Morango', 'Maçã', 'Uva', 'Pêra', 'Laranja']

    decrescente.reverse();

    const novaLista = []

    for (i = 0; i < decrescente.length; i++) {
        console.log(crescente[i] + ' - ' + decrescente[i]);
    }




}

exibirDados();

//Resultado esperado: ['Pedro - Laranja', ‘José - Pêra’, 'Aderbal - Uva', 'Danilo - Maçã', 'Luisa - Morango', 'Vitoria - Banana' ]
