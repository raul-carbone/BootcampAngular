//entendendo OBJETOS em javascript


//O objeto é uma coleção dinâmica de chaves e valores.
//Sintaxe de um objeto literal - definindo um OBJETO.
const pessoa = {
    nome: "Raul Carbone",
    idade: 23,

    //função dentro de um objeto.
    descricao: function () {
        //aqui a palavra THIS significa como se fosse o contexto aonde essa função está sendo usada, nesse caso o objeto.
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};

//Isso é uma forma dinâmica de pegar dados de um objeto, no caso abaixo criei uma variavel que coincide com o nome da chave no objeto, e passo dentro de colchetes essa variavel para pegar o valor desejado.
//Estou através de uma string acessando dinâmicamente o atributo de PESSOA.
//Também posso alterar valores usando essa sintaxe;
const atributo = 'idade';

console.log(pessoa[atributo]);

pessoa[atributo] = 28;

console.log(pessoa[atributo]);


//a função pode ser alterada ao longo do código assim como as outras chaves do objeto.
pessoa.descricao = function () {
    console.log(`Meu nome é ${this.nome}`);
}

//Posso chamar a função dentro do objeto, essas função são conhecidas como MÉTODOS
pessoa.descricao();


console.log(pessoa.nome);
console.log(pessoa.idade);

console.log(pessoa);


//pode ser incrementado uma chave e um valor para o objeto ja criado acima
pessoa.altura = 1.78;


//também pode ser deletado alguma chave com seu respectivo valor de um objeto
delete pessoa.idade;

console.log(pessoa);

/* ********************************************************************************************************************************************************************************** */

//Entendendo Classes e Instâncias
//A classe aqui vai ser usada para descrever uma pessoa em geral, aqui no caso o Raul seria a instância dessa classe, pois o Raul é uma Pessoa

//Classe - Definição
//Instância - Ocorrência
class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    //oque acontece oq uma pessoa é instanciada. sempre que uma Pessoa for instanciada ela passa no constructor.
    //o codigo abaixo faz com que isso obrigue que sempre que uma pessoa for instanciada, ele peça o nome e a idade, podendo passar os valores dentro do parenteses como mostra la embaixo.
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2024 - idade;
    }

    descricao() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

//Funções recebendo objetos.
function compararIdadePessoas(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) do que ${p2.nome}.`);
    } else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho(a) do que ${p1.nome}.`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade.`)
    }
}

const raul = new Pessoa("Raul", 25);
const rubens = new Pessoa("Rubens", 24);

compararIdadePessoas(raul, rubens);

//Instânciando um objeto dentro da classe Pessoa.
// const raul = new Pessoa("Raul", 24);
//atribuindo valores, se nao tiver valores aparecerá Undefined, pois nao foi dado nenhum valor.
// raul.nome = "Raul Carbone";
// raul.idade = 23;

//Instânciando um outro objeto dentro da classe Pessoa.
// const renan = new Pessoa("Renan", 30);
// renan.nome = "Renan";
// renan.idade = 24;


// console.log(raul);
// console.log(renan);

// //por serem instâncias dentro da classe Pessoa recebem todos os atributos dispostos pela classe, funções e etc.
// raul.descricao();
// renan.descricao();