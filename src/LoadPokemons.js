export default class LoadPokemons{
    constructor(){
        
    }
    
    async fetchPokemonApi(url){
        fetch(url)
        .then(response => response.json())
        .then( allpokemon => {
            allpokemon.results.forEach( pokemon =>{
                this.fetchPokemonData(pokemon);
            })
        })
    }

    async fetchPokemonData(pokemon){
        let url = pokemon.url 

        fetch(url)
        .then(response => response.json())
        .then( pokeData  => {
            this.renderPokemon(pokeData)
        })
    }

    renderPokemon(pokeData){
        $('#table-tbody').append(`
            <tr>
                <th scope="row">${pokeData.id}</th>
                <td><img src="${pokeData.sprites.front_default}" alt="${pokeData.name}"</td>
                <td>${pokeData.name}</td>
                <td><span class="types">${pokeData.types.map(type => `<p class="${type.type.name}">${type.type.name}<p>`).join('')}</span></td>
            </tr>
        `)
    }
}