/*Classes - usada para reaproveitar e criar coisas com o mesmo formato - como se fosse uma forma de bolo para fazer outros tipos de bolo */ 

class Char {
    protected name?: string;
    readonly stregth: number;
    skill: number;

    constructor(name: string, stregth: number, skill: number) {
        this.name = name;
        this.stregth = stregth;
        this.skill = skill;
    }

    attack() : void{
         console.log(`Attack with ${this.stregth} points`)
    }

}

//Char - Superclass(classe pai) 
//Mage - Subclass(classe filha) - herda estrutura da superclass
class Mage extends Char {
    intelligence: number;


    constructor(name: string, stregth: number, skill: number, intelligence: number){
        super(name, stregth, skill)
        this.intelligence = intelligence;
    }
}


const p1 = new Char("Rkmaster", 10, 98);
p1.skill = 100;

const p2 = new Mage("RkmasterMage", 5, 250, 159);
console.log(p2);
