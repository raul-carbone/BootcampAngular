/*Funções*/

function addNumber(x:number, y:number) : number {
    return x + y;
}

function addToHello(name: string) : string {
    return `Hello ${name}`;
}

let soma:number = addNumber(4, 7);
console.log(soma); 

let frase:string = addToHello("Raul");
console.log(frase)


/*Funções Multi Types*/
//A função abaixo pode receber para o parametro phone um number ou uma string.
function callToPhone(phone: number | string) : number | string {
    return phone;
}

console.log(callToPhone(15154532));


/*Funções ASYNC - Assincronas - sempre retorna uma PROMISE do tipo de valor que eu preciso retornar*/
async function getDatabase(id: number) : Promise<string>{
    return "raul";
}