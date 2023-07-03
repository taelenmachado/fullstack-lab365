const bicicletas = [
    { id: 1, name: 'Nimbus Stark', price: 4999 },
    { id: 2, name: 'Magic Might', price: 2499 },
    { id: 3, name: 'Nebula Cosmic', price: 3999 },
]


function sobre(id) {
    const bicicleta = bicicletas.find(b => b.id === id);
    if (bicicleta) {
        console.log(`Ir para a página da bicicleta ${bicicleta.name}`);
    }
}


function trocarTema() {
    const body = document.body;
    const isWhiteTheme = body.classList.contains('white-theme');

    body.classList.toggle('white-theme', !isWhiteTheme);
}

