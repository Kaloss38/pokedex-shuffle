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
        // $('#table-tbody').append(`
        //     <tr class="table-tr col-12" data-title="${pokeData.name}" data-groups='[${pokeData.types.map(type => `"${type.type.name}"`).join(',')}]'>
        //         <th scope="row">${pokeData.id}</th>
        //         <td><img src="${pokeData.sprites.front_default}" alt="${pokeData.name}"</td>
        //         <td>${pokeData.name}</td>
        //         <td><span class="types">${pokeData.types.map(type => `<p class="${type.type.name}">${type.type.name}<p>`).join('')}</span></td>
        //     </tr>
        // `)
        $("#main").append(`
            <div class="card col-lg-3 col-xs-12" data-title="${pokeData.name}" data-groups='[${pokeData.types.map(type => `"${type.type.name}"`).join(',')}]'>
                <img class="card-img-top" src="${pokeData.sprites.front_default}" alt="Card image cap">
                <div class="card-body">
                <h5 class="card-title">${pokeData.name}</h5>
                <p class="card-text"><span class="types">${pokeData.types.map(type => `<p class="${type.type.name}">${type.type.name}<p>`).join('')}</span></p>
                </div>
            </div>
        `)
    }
}