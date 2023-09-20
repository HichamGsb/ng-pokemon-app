import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  pokemonList: Pokemon[] = POKEMONS;

  ngOnInit(): void {
    console.table(this.pokemonList);
  }

  selectPokemon(event: MouseEvent) {
    const index: number = Number((event.target as HTMLInputElement).value); // Number() ou +
    console.log(`Vous avez cliqué sur le pokemon ${this.pokemonList[index].name}.`)
  }
}
