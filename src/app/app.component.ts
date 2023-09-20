import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  pokemonList: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon|undefined;

  ngOnInit(): void {
    console.table(this.pokemonList);
  }

  selectPokemon(pokemonId: string) {
    const pokemon: Pokemon|undefined = this.pokemonList.find(pokemon => pokemon.id == +pokemonId)
    
    if(pokemon) {
      console.log(`Vous avez cliqué sur le pokemon ${pokemon.name}.`)
      this.pokemonSelected = pokemon;
    } else {
      console.log("Vous avez demandez un pokemon non existant.");
      this.pokemonSelected = pokemon;
    }
  }
}
