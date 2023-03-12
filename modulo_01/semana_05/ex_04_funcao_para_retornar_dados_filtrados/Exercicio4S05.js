function verificaIdade() {

const pessoas = [

    {
        nome: "luis",
        idade: 26
    },

    {
        nome: "norma",
        idade: 16
    },

    {
        nome: "daiana",
        idade: 26
    },

    {
        nome: "jorge",
        idade: 16
    },

    {
        nome: "kauan",
        idade: 16
    },

    {
        nome: "charles",
        idade: 26
    },

    {
        nome: "marco",
        idade: 16
    },

    {
        nome: "bruno",
        idade: 16
    }
]

const maioresIdade = pessoas.filter((pessoa) => {
    return pessoa.idade >= 18
})

const menoresIdade = pessoas.filter ((pessoa) => {
    return pessoa.idade < 18    
})

console.log(maioresIdade);
console.log(menoresIdade);

}

verificaIdade();