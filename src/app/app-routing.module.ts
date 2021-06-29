import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleTwoComponent } from './modules/moduleTwo/moduleTwo.component';
import { PokemonComponent } from './modules/pokemon/pokemon.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pokemon'
  },
  {
    path: 'pokemon',
    component: PokemonComponent,
    loadChildren: () =>
      import('./modules/pokemon/pokemon.module').then((m) => m.PokemonModule)
  },
  {
    path: 'm2',
    component: ModuleTwoComponent,
    loadChildren: () =>
      import('./modules/moduleTwo/moduleTwo.module').then((m) => m.ModuleTwoModule)
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
