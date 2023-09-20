import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>Welcome to {{ title }}</h1>`
})
export class AppComponent implements OnInit {
  title = 'Pokemon App'
  pokemonList = ['Bulbizarre', 'Salamèche', 'Carapuce'];

  ngOnInit(): void {
    console.table(this.pokemonList);
    this.selectPokemon('Bulbizarre')
  }

  selectPokemon(pokemonName: String) {
    console.log(`Vous avez cliqué sur le pokemon${pokemonName}.`)
  }
}
