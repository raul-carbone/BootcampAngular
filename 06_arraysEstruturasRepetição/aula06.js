//Arrays - Listas
//representado por colchetes, podem receber varios valores.
const alunos = ["raul", "rubens", "matheus"];

console.log('- Abaixo está a representação de um array.')
console.log(alunos);

console.log('- Também podemos selecionar um valor dentro de um array pelo seu índice usando -console.log(alunos[n])- começando pelo 0.')
console.log(alunos[0]);

console.log(alunos[1]);

console.log(alunos[2]);

// adicionando e removendo itens de um array

console.log('Um valor pode ser adicionado dentro de um array através do método PUSH - exemplo: alunos.push("carlos") -')

//método PUSH - usado apenas para adicionar valor no final da sua lista
alunos.push('carlos');

//também pode ser adicionado itens dessa forma, substituidos etc.
alunos[4] = "pedro";

//também é permitido tipos de dados diferentes dentro de um unico array
alunos.push(10);

//método POP - usado para deletar o ultimo valor da lista
console.log(alunos.pop());

//método SHIFT - mesma lógica que o POP, a diferença é que nesse o primeiro valor da lista é excluido.
console.log(alunos.shift());


console.log(alunos);



//Estruturas de Respetições - (FOR)

//usando a estrutura de repetição FOR para percorrer uma string
// tip - a String é um array de caracteres, entao pode ser usados métodos de arrays.
const nome = "Raul Santana Gonçalves Carbone";

for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]);
}

const notas = [];
//Método para saber o tamanho da lista que tem o seu tamanho dinamico, isso quer dizer que ela aumenta e diminui conforme a quantidade de valores
// console.log(notas.length);


notas.push(10);
notas.push(7);
notas.push(5);

//Estrutura de repetição FOR;
//  percorrendo a lista e fazendo a soma dinamicamente
let soma = 0;

//  variavel de controle - condição para que o bloco continue rodando - incrementa 1 a variavel de controle.
for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota;
}

const media = soma / notas.length;

console.log(media);
