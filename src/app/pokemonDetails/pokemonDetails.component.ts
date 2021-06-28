import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Pokemon } from 'src/app/_app-core/models/pokemon.model';
import { PokemonService } from '../_app-core/services/pokemon.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemonDetails.component.html',
  styleUrls: ['./pokemonDetails.component.sass'],
})
export class PokemonDetailsComponent implements AfterViewInit {
  public pokemon: Pokemon;
  public term: string;
  public statsArray: string[] = [
    'HP',
    'ATTACK',
    'DEFENSE',
    'SP-ATK',
    'SP-DEF',
    'SPEED',
  ];

  constructor(
    private pokemonService: PokemonService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService
  ) {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.term = params.get('term');
      this.getPokemon();
    });
  }

  public ngAfterViewInit(): void {
    this.getPokemon();
  }

  private getPokemon(): void {
    if (this.term) {
      this.pokemonService.getPokemon(this.term).subscribe(
        (p) => {
          this.toastrService.clear();
          if (!(p instanceof HttpErrorResponse)) {
            this.pokemon = new Pokemon(p);
          } else {
            this.toastrService.error(
              'That was an invalid search term please try again',
              'OH NO!'
            );
          }
        },
        (err) => {
          console.error('Something went wrong');
        },
        () => {
          console.info('done');
        }
      );
    }
  }
}
