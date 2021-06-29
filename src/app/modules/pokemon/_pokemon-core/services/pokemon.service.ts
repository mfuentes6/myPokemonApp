import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import { Pokemon } from '../models/pokemon.model';
import {HttpClient} from '@angular/common/http'
import { MessageService } from 'src/app/_app-core/services/message.service';

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
