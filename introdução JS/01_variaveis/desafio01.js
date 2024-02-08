//Faça um programa para calcular o valor de uma viagem.

// Tenho 3 variaveis, sendo elas:
// 1 - Preço do Combustivel;
// 2 - Gasto Médio de combst. do carro por KM;
// 3 - Dist. em KM da viagem;

//Imprima no console o valor que sera gasto de combustivel ao realizar essa viagem;

let preçoCombustivel = 5.79;
let gastoMedio = 12;
let distViagem = 1580;

const valorGasto = preçoCombustivel * (distViagem / gastoMedio);

console.log("O gasto em reais de combustível nessa viagem será de R$" + valorGasto.toFixed(2) + ".")