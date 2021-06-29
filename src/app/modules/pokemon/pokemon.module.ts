import { NgModule } from '@angular/core';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokemonComponent } from './pokemon.component';
import { MessagesComponent } from './messages/messages.component';
import { AppCoreModule } from 'src/app/_app-core/app-core.module';
import { PokemonService } from './_pokemon-core/services/pokemon.service';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { PokemonDetailsComponent } from './pokemonDetails/pokemonDetails.component';



@NgModule({
  declarations: [
    PokemonComponent,
    MessagesComponent,
    PokemonsComponent,
    PokemonDetailsComponent
   ],
  imports: [
    AppCoreModule,
    PokemonRoutingModule,
  ],
  providers: [
    PokemonService,
  ]
})
export class PokemonModule { }
