// //tip - tudo que funciona no javascript tambem vai funcionar no typescript, ele é um 'javascript tunado'

// type heroi = {
//     name: String;
//     vulgo: String;
// };

// //Função para printar um objeto
// function printaObjeto(pessoa: heroi){
//     console.log(pessoa);
// }

// //chamando a função que printa um objeto
// printaObjeto({
//     name : "Peter Parker",
//     vulgo: "Homem Aranha",
// });


/*Variaveis*/
//nota-se que é entendido da mesma forma as duas linhas de código, na segunda linha mesmo nao tendo tipado a variavel, por inferência o programa entende que se trava do tipo boolean.
// let ligadoTeste2 = false;

//primitivos
    //boolean
    //number
    //string

    //declarando uma variavel
    let ligado: boolean = false;
    let nome: String = "Raul";
    //a tipagem number entende numeros decimais.
    let idade: number = 23;
    let altura: number = 1.78;


//Especiais
    //null - pode apenas receber NULL.
    //undefined - apenas recebe UNDEFINED
    let nulo: null = null;
    let indefinido: undefined = undefined;


//Abrangentes
    //any - significa qualquer coisa, pode receber qualquer tipo de dado - usado para algumas funções que podem retornar um valor de tipo imprevisto("objeto, numero, string, boolean etc.")
    //void - vazio nao recebe valor nenhum
    let retorno: void;
    let retornoView: any = 0;



/*Objetos*/

//objeto sem previsibilidade
let produto:object = {
    name:"Raul",
    cidade:"Araraquara",
    idade:23,
};

//objeto totalmente tipado - boas práticas em código
type ProdutoLoja = {
    nome: String;
    preco: number;
    unidades: number;
};

let meuProduto: ProdutoLoja = {
    nome: "Tênis",
    preco: 89.99,
    unidades: 5,
};



/*Arrays*/
//duas formas de declaração de ARRAYS em typescript
let dados:string[] = ["RAUL","felipe"];

let dados2: Array<string> = ["RAUL","felipe"];

//Arrays Multi Types - armazena dois tipos de conteúdo dentro de um ARRAY
let info: (string | number)[] = ["Raul", 1.78, "Rubens", 1.70];

//Métodos Arrays - mesmos métodos de arrays em JS.
//Ex:
    dados.push("Teste");



/*Tuplas*/
//Vetor multi type(pode receber mais de um tipo), a diferença é que ela tem um lugar certo para cada coisa, tem que seguir a mesma ordem da declaração dos tipos.
let boleto:[string, number, number] = ["agua conta", 199.90, 6535627];
//let boleto:[string, number, number] = [199.90, "agua conta", 6535627]; - ERRADO



/*Trabalhando com Dates ( Datas )*/
let aniversario: Date = new Date("2000-08-06 05:00");
console.log(aniversario.toString());