/*Generics*/

function concatArray<T>(...itens: T[]) : T[] {
    return new Array().concat(...itens);
}

const numArray = concatArray<number[]>([1, 2] , [3]);
const stringArray = concatArray<string[]>(["raul", "felipe"] , ["jonas"])


console.log(numArray);
console.log(stringArray);