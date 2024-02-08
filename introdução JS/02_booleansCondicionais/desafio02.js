// Faça um programa para calcular o valor de uma viagem.

// Você terá 5 variáveis. Sendo elas:
//  1 - Preço do etanol;
//  2 - Preço do gasolina;
//  3 - O tipo de combustível que está no seu carro;
//  4 - Gasto médio de combustível do carro por KM;
//  5 - Distância em KM da viagem;

// Imprima no console o valor que será gasto para realizar esta viagem.

const precoEtanol = 5.79;
const precoGasolina = 6.66;

const tipoCombustivel = 'gasolina';

const gastoMedio = 10;
let distanciaViagem = 100;
let valorGasto;

if (tipoCombustivel === 'gasolina') {
    valorGasto = (distanciaViagem / gastoMedio) * precoGasolina;
    console.log("O gasto em gasolina para essa viagem é de R$" + valorGasto.toFixed(2));
} else if (tipoCombustivel === 'etanol') {
    valorGasto = (distanciaViagem / gastoMedio) * precoEtanol;
    console.log("O gasto em etanol para essa viagem é de R$" + valorGasto.toFixed(2));
}