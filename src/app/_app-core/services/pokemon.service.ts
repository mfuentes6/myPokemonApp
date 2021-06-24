import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { PokemonsComponent } from 'src/app/pokemons/pokemons.component';
import { mockPokemon, Pokemon } from '../models/pokemon.model';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(public messageService: MessageService) { console.log("hello world") }

  public getPokemon(i: number): Observable<Pokemon[]> {
    this.messageService.add("Pokemon Service fetched Pokemon");
    if (i === 0) {
      return throwError({ errorMessage: 'Some error' });
    }
    return of(mockPokemon);
  }

}
