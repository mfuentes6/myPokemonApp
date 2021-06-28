import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from '../_app-core/services/message.service';
import { PokemonService } from '../_app-core/services/pokemon.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.sass'],
})
export class PokemonsComponent {
  public term = 'pikachu';

  constructor(
    public pokemonService: PokemonService,
    public messageService: MessageService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    const newTerm = this.activatedRoute.snapshot.paramMap.get('term');
    if (newTerm) {
      this.term = newTerm;
    }
  }

  public getPokemon(i: string): void {
    this.router.navigate(['pokemon', i]);
  }
}
