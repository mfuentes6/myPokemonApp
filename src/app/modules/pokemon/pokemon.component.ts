import { Component } from '@angular/core';
import { PokemonService } from './_pokemon-core/services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.sass']
})
export class PokemonComponent {

  constructor (
    public pokemonService: PokemonService
  ) {}
}
