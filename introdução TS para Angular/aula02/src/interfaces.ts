/*Interfaces (types x interface)*/
//Interfaces são mais utilizadas em CLASSES enquanto o Type é para quando precisar tipar seus objetos para terem uma estrutura completa.

type robotType = {
    readonly id:number | string,//propriedade somente de leitura, o mundo exterior nao pode alterar
    name: string,
};

interface robotInterface {
    readonly id:number | string,
    name: string,
    sayHello():string;
}

const bot1: robotType = {
    id:"USHIUHAK",
    name:"raulBot",
};

const bot2: robotInterface = {
    id: "USHIUHAK",
    name: "raulBot",
    sayHello: function (): string {
        throw new Error("Function not implemented.");
    }
};


/************************************************************************************/

class Pessoa implements robotInterface {
    id: string | number;
    name: string;
    
    constructor(id: string | number , name: string){
        this.id = id
        this.name = name
    }
    sayHello(): string {
        return `hello, i'm ${this.name}`;
    }


};

const p = new Pessoa(1, "Raul")
console.log(p.sayHello());
