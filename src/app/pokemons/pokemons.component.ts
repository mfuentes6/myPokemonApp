import { Component, OnInit } from '@angular/core';
import {Pokemon} from 'src/app/_app-core/models/pokemon.model';
import { MessageService } from '../_app-core/services/message.service';
import { PokemonService } from '../_app-core/services/pokemon.service';
@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.sass']
})
export class PokemonsComponent {
  selectedPokemon?: Pokemon;
  pokemon: any;
  constructor(public pokemonService: PokemonService, public messageService: MessageService) { }




  public getPokemon(i: string): void{
    this.pokemonService.getPokemon(i).subscribe(p =>{
      this.pokemon = p;
    }, (err) => {
      console.error("Something went wrong");
    }, () => {
      console.info("done");
    });
  }


}
