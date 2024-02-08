const { gets, print } = require('./funcoes-aux');

// 3 - Faça um programa que receba a quantidade de números e seus respectivos valores.
// Imprima todos os números pares.
// Exemplo:
//     Entrada:
//         5
//         1
//         3
//         9
//         10
//         12

//     Saída:
//         Números Pares: 10, 12
const quantidadeDeNumeros = gets();

for (let i = 0; i < quantidadeDeNumeros; i++) {
    const numeroAnalisado = gets();
    if (numeroAnalisado % 2 === 0) {
        print(numeroAnalisado)
    }

}
