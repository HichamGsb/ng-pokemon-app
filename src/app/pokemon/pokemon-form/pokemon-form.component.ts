import {Component, Input, OnInit} from '@angular/core';
import {PokemonService} from "../pokemon.service";
import {Pokemon} from "../pokemon";

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styles: [
  ]
})
export class PokemonFormComponent implements OnInit {

  ngOnInit() {
  }

}
