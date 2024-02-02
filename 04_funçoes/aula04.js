//Conceitos básicos

//declarando uma função
//funçoes que nao retornam nada são chamadas de procedimentos, pois apenas processa oque é pedido e acaba por ai
//tip - aqui a função ainda não é executada, ela só é executada quando for chamada.
//tip - as funçoes auxiliares usadas devem ser colocadas fora da função Main e chamadas na mesma quando desejar utiliza-las, trata-se de uma boa prática
//tip - as funções podem receber parâmetros
//tip - funcoes podem ser usadas varias vezes com valores diferentes
//tip - funçoes no javascript podem ser usadas como objetos, podemos mudar o valor, atribuir um valor novo, usar em parametro em outra função etc.

function funcaoTeste() {
    console.log("Teste");
}

function sayMyName(name) {
    console.log("You name is " + name)
}

function quadrado(valor) {
    return valor * valor;
}

function somarJuros(valor, percentualJuros) {
    const valorAcrescimo = (percentualJuros / 100) * valor;
    return valor + valorAcrescimo;
}

function subtrairJuros(valor, percentualJuros) {
    const valorAcrescimo = (percentualJuros / 100) * valor;
    return valor - valorAcrescimo;
}


//***Exercicio de IMC com funções

function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classificarImc(IMC) {

    if (IMC < 18.5) {
        return "Abaixo do peso"
    } else if (IMC >= 18.5 && IMC < 25) {
        return "Peso normal"
    } else if (IMC >= 25 && IMC < 30) {
        return "Acima do peso"
    } else if (IMC >= 30 && IMC < 40) {
        return "Obeso"
    } else if (IMC > 40) {
        return "Obsesidade Grave"
    }

}




//Todo o programa principal deve estar dentro de uma função Main.
(function main() {

    //***Exercicio do IMC com funções
    //criei funçoes auxiliares do calculo e da classificacao e chamei elas no programa principal
    let peso = 75;
    let altura = 1.78;

    const IMC = calcularImc(peso, altura);

    console.log(classificarImc(IMC));



    //chamando a função
    funcaoTeste();

    sayMyName('Raul');

    //colocando o valor dado pela função dentro de uma variavel
    const quadradoDeDez = quadrado(10);
    console.log(quadradoDeDez);


    console.log(quadrado(20));

    console.log(somarJuros(25, 10));

    console.log(subtrairJuros(2500, 10));



})();
//os parenteses no comeco e no final da função main transforma ela em uma FUNÇÃO IMEDIATAMENTE INVOCADA, ou seja, ela nao precisa ser chamada para ser executada

//chamando a função main.
// main();
