//Boolean e Condicionais

const CamisetaAzul = true;
const CamisetaVerde = false;

console.log(10 > 5);

console.log(5 > 2);

let numero = 10;

//verificando se o numero acima é par
//tip - os 3 iguais confere o tipo e o valor da variavel, enquanto apenas 2 iguais confere apenas o valor e não o tipo
//tip - na nomenclatura variaveis que carregam dados do tipo boolean começam com 'is'
const isNumeroDivisivelPor5 = numero % 5 === 0;


//IF - ELSE IF

//primeira forma de uso
if (isNumeroDivisivelPor5) {
    console.log("Sim")
} else {
    console.log("Não")
}

//segunda forma de uso
//tip - o sinal de exclamação significa negação, aqui está colocando se o valor da variavel for a contraria, no caso falsa.
if (isNumeroDivisivelPor5) {
    console.log("Sim")
} else if (!isNumeroDivisivelPor5) {
    console.log("Não")
}


//segue a mesma lógica que os outros, aqui o programa verifica se o numero é ZERO, caso nao for ele continua o bloco para o ELSE IF e faz a segunda verificação
if (numero === 0) {
    console.log("O número é inválido")
} else if (isNumeroDivisivelPor5) {
    console.log("Sim")
} else {
    console.log("Não")
}
