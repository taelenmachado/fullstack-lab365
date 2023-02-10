const aluno0 = {
    nome: "Gabriela",
    altura: 1.54,
    idade: 23,
    sexo: "femino",
    sala: 5,
    matematica: 10,
}

const aluno1 = {
    nome: "Athur",
    altura: 1.64,
    idade: 21,
    sexo: "masculino",
    sala: 3,
    matematica: 6,
}

const aluno2 = {
    nome: "Miguel",
    altura: 1.74,
    idade: 26,
    sexo: "masculino",
    sala: 2,
    matematica: 8,
}

const aluno3 = {
    nome: "Caio",
    altura: 1.44,
    idade: 19,
    sexo: "masculino",
    sala: 1,
    matematica: 5,
}

const aluno4 = {
    nome: "Letícia",
    altura: 1.50,
    idade: 24,
    sexo: "feminino",
    sala: 2,
    matematica: 2,
} 

const aluno5 = {
    nome: "Sabrina",
    altura: 1.63,
    idade: 26,
    sexo: "feminino",
    sala: 3,
    matematica: 9,
}

function verificaAprovacao(aluno) {
    if(aluno.matematica >= 7) {
        console.log(aluno.nome + ": Aprovado");
    } else if(aluno.matematica <= 4) {
        console.log(aluno.nome + ": Reprovado");
    } else {
        console.log(aluno.nome + ": Em recuperação");
    }
}

const alunos = [aluno0, aluno1, aluno2, aluno3, aluno4, aluno5];


alunos.forEach( (aluno) => {
    verificaAprovacao(aluno)
})



