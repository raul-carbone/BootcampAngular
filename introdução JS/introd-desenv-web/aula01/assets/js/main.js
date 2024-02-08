// //Se o response chamar um JSON, retorna uma promise de N, o objeto convertido.
// response
//     .json()
//     .then(function (responseBody) {
//         console.log(responseBody);
//     })

//pega uma lista do meu HTML - pois estou pegando por ClassName, com o Id retorna apenas um único item.
const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMore')
const maxRecords = 151;
const limit = 16;
let offset = 0;


function loadPokemonItems(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {//printando a chave results com os valores da lista.
        const newHtml = pokemons.map((pokemon) => `
                <li class="pokemon ${pokemon.type}">
                    <!-- Id do pokemon -->
                    <span class="number">#00${pokemon.id}</span>
                    
                    <!-- Nome do pokemon -->
                    <span class="name">${pokemon.name}</span>

                    <!-- Detalhes do pokemon -->
                    <div class="detail">
                        <ol class="types">
                            ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')} 
                        </ol>

                        <!-- Imagem do pokemon -->
                        <img src=${pokemon.photo}
                            alt=${pokemon.name}>
                    </div>

                </li>
            `).join('')
        //Metodo MAP para diminuir o codigo
        pokemonList.innerHTML += newHtml

    })
}

loadPokemonItems(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit

    const qtdRecordNextPage = offset + limit

    if (qtdRecordNextPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItems(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonItems(offset, limit)
    }



})
