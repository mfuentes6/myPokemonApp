import { Component } from '@angular/core';
import { PokemonService } from './_app-core/services/pokemon.service';
import {
  faUsers
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  constructor (
    public pokemonService: PokemonService
  ) {}
}
