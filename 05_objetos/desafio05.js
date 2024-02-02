// 1 -  Crie uma classe para representar carros


// Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
// Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor
// gasto em reais para realizar este percurso.

//CLASSE
class Carro {
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    calcularValorGastoViagem(distanciaEmKm, preco) {
        return distanciaEmKm * this.gastoMedioPorKm * preco;
    }

}

//INSTÂNCIA
const corsinhaAmarelo = new Carro("Toyota", "Amarelo", 1 / 12);
const pokebolaDoGordo = new Carro("Chevrolet", "Preto", 1 / 15);

//Utilizando o método
console.log(corsinhaAmarelo.calcularValorGastoViagem(70, 5));
console.log(pokebolaDoGordo.calcularValorGastoViagem(70, 5));


//2 - Crie uma classe para representar pessoas.
// Para cada pessoa teremos os atributos nome, peso e altura.
// As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
// Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
// do seu IMC;
//crie um metodo para classificar o IMC

class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc() {
        return this.peso / (this.altura * this.altura);
    }

    classificarImc() {
        const imc = this.calcularImc();

        if (imc < 18.5) {
            return "Abaixo do peso"
        } else if (imc >= 18.5 && imc < 25) {
            return "Peso normal"
        } else if (imc >= 25 && imc < 30) {
            return "Acima do peso"
        } else if (imc >= 30 && imc < 40) {
            return "Obeso"
        } else if (imc > 40) {
            return "Obsesidade Grave"
        }
    }

}

const jose = new Pessoa("Jose", 70, 1.75);
const raul = new Pessoa("Raul", 65, 1.78);
const rubens = new Pessoa("Rubens", 84, 1.75);

console.log(raul.classificarImc());
console.log(raul.calcularImc());

console.log(rubens.classificarImc());
console.log(rubens.calcularImc());