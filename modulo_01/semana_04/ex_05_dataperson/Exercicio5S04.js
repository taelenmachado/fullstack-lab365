class Person {
    nome;
    idade;
    altura;
    constructor(nome, idade, altura) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
    }

    apresentar() {
        console.log(`Olá me chamo ${this.nome}, tenho ${this.idade} anos e tenho ${this.altura} de altura`);
    }

}

const apresentacao = new Person("Taelen", 30, 1.57);

apresentacao.apresentar();

class Profession extends Person {
    constructor(nome, idade, altura, profissao) {
        super(nome, idade, altura);
        this.profissao = profissao;
    }

    apresentar() {
        console.log(`Olá me chamo ${this.nome}, tenho ${this.idade} anos e tenho ${this.altura} de altura e sou ${this.profissao}`)
    }
}
const novaApresentacao = new Profession("Natan",34,1.85,"desenvolvedor");

novaApresentacao.apresentar();