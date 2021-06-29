import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import { PokemonsComponent } from 'src/app/pokemons/pokemons.component';
import { Pokemon } from '../models/pokemon.model';
import { MessageService } from './message.service';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  public term = 'pikachu';
  public pTerm: string;
  public currentPokemon: Pokemon;

  constructor(public messageService: MessageService, private http: HttpClient) { }

  public getPokemon(i: string): Observable<Pokemon> {
    this.messageService.add(`Pokemon Service fetched Pokemon: ${i}`);
    return this.http.get<Pokemon>("https://pokeapi.co/api/v2/pokemon/" + i.toLowerCase()).pipe(
      retry(2),
      catchError((error, caught)=>{
        return of(error);
      })
    );
  }
}
