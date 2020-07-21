import "@babel/polyfill";
import LoadPokemons from './LoadPokemons.js';
import ShuffleJs from './Shuffle.js'

$(document).ready(function(){
      
      //Set pokemons url by region
      const urlsRegion = {
            urlNational : 'https://pokeapi.co/api/v2/pokemon?limit=807',
            urlKanto : 'https://pokeapi.co/api/v2/pokemon?limit=151',
            urlJohto : 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=151',
            urlHoenn : 'https://pokeapi.co/api/v2/pokemon?limit=135&offset=251',
            urlSinnoh : 'https://pokeapi.co/api/v2/pokemon?limit=108&offset=386',
            urlUnys : 'https://pokeapi.co/api/v2/pokemon?limit=155&offset=494',
            urlKalos : 'https://pokeapi.co/api/v2/pokemon?limit=72&offset=649',
            urlAlola : 'https://pokeapi.co/api/v2/pokemon?limit=86&offset=721' 
      }

      //Instanciate class LoadPokemons
      const pokedex = new LoadPokemons();

      pokedex.fetchPokemonApi(urlsRegion.urlNational);

      // Load pokemons by regions when clicked
      $('.nav-region button').each(function(){
            $(this).on('click', function(){
                  const attrId = $(this).attr('id');
                  $('#table-tbody').empty();
                  Object.keys(urlsRegion).forEach( key => {
                        if(attrId == key){
                              pokedex.fetchPokemonApi(urlsRegion[key]);      
                        }
                  })
            })
      })

      
})