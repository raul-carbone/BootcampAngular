
const pokeApi = {}

function convertPokeApiDetailToPokemon(pokeDetail) {
    const pokemon = new Pokemon()
    pokemon.id = pokeDetail.id;
    pokemon.name = pokeDetail.name;


    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types


    pokemon.types = types
    pokemon.type = type

    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

    return pokemon


}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json())
        .then((convertPokeApiDetailToPokemon))
}

//Função de consumo da API
pokeApi.getPokemons = (offset = 0, limit = 5) => {
    const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;

    //Retorna uma PROMISE - é a promessa de um resultado.
    //Processamento Assíncrono - o sistema irá continuar executando as linhas de código abaixo e qnd for concluida a requisição ela retornará.
    //Encadeamentos de .thens() - o que vai pro segundo .then() é o retorno do primeiro.
    return fetch(url)
        //As arrow functions são essas funções declaradas de forma mais 'clean', 
        //geralmente utilizadas nesse tipo de situação.Sintaxe abaixo:
        .then((response) => response.json())//promessa do body convertido em json;
        .then((jsonBody) => jsonBody.results)//promessa da chave results com seus valores.
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
        .then((detailRequest) => Promise.all(detailRequest))
        .then((pokemonsDetails) => pokemonsDetails)
}
