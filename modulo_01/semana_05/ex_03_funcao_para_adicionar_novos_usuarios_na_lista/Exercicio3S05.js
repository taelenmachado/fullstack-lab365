function adicionaNome(...nomes) {

    const lista = ['Pedro', 'José', 'Aderbal', 'Danilo', 'Luisa', 'Vitoria']
    const novaLista = []

    for (let name of nomes) {

        if (typeof name !== 'string') {
            console.log('Dado inválido! Retorne valor em string!');
        } else if (lista.includes(name)) {
            console.log(`O nome ${name} já está na lista!`)
        } else {
            lista.push(name);
            console.log(lista);
        }
    }
}

adicionaNome('Jéssica', 'José', 2);
adicionaNome('Maria', 'Jurema', 'Clotilde');
adicionaNome('34', 3);
adicionaNome('Natan');
adicionaNome('José', 'Letícia', 'Catarina')


