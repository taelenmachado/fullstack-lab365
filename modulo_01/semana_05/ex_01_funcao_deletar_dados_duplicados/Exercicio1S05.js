const lista = ['Pedro', 'José', 'Aderbal', 'Danilo', 'Luisa', 'Vitoria', 'Luis', 'Danilo', 'José']

const listaSemDuplicados = new Set (lista)

console.log(listaSemDuplicados); 

const Duplicados = lista.filter((nome, index) => lista.indexOf(nome) !== index);

console.log(Duplicados.concat(listaSemDuplicados));

