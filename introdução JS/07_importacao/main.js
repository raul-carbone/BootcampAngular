//Importando o objeto que tem os métodos gets e print
//Usando o Obj. Destructuring para a importação dos métodos do objeto. 
const { gets, print } = require('./funcoes-aux');

// console.log(funcoes.gets());
//Object Destructuring
// print(gets());


/* ***DESAFIO***


    Uma sala contem 5 alunos e p/ cada aluno foi sorteado um numero de 1 - 100.
    Faça um programa que receba os 5 numeros sorteados para os alunos e mostre o maior numero sorteado.

    Dados de entrada:
    5
    50
    10
    98
    23

    Saída:
    98

*/


// //Primeira forma de resolver
// const numerosSorteados = [];

// for (let i = 0; i < 5; i++) {
//     const numeroSorteado = gets();
//     numerosSorteados.push(numeroSorteado);
// }

// print(numerosSorteados);

// //Usando uma variavel para guardar o maiorValor e ir comparando com os demais.
// let maiorValor = 0;

// for (let i = 0; i < numerosSorteados.length; i++) {
//     //coloco o valor que esta no index do array em uma variavel
//     const numeroSorteado = numerosSorteados[i];
//     //comparo o numeroSorteado com o maiorValor, caso o numero for maior, a variavel maiorValor recebera aquele numero. Restando assim o maior numero depois que comparar pela lista inteira.
//     if (numeroSorteado > maiorValor) {
//         maiorValor = numeroSorteado;
//     }

// }

// print(maiorValor);

// //Segunda forma de resolver - simplificando a lógica.

const quantidadeDeAlunos = gets();
let maiorValorEncontrado = 0;

for (let i = 0; i < quantidadeDeAlunos; i++) {
    const numeroSorteado = gets();
    if (numeroSorteado > maiorValorEncontrado) {
        maiorValorEncontrado = numeroSorteado;
    }
}

print(maiorValorEncontrado);