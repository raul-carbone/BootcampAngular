
const entradas = [4, 100, 150, 90, 200]

let i = 0;


function gets() {
    const valor = entradas[i];
    i++;
    return valor;
}

function print(texto) {
    console.log(texto);
}

//Exportando um objeto que tenha as funções Gets e Print.
module.exports = { gets, print };

//Outra forma:
//module.exports.gets = gets;