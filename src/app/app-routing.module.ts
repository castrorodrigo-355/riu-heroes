import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuperheroesModule } from './superheroes/superheroes.module';

const routes: Routes = [
  {
    path: 'superheroes',
    loadChildren: () =>
      import('./superheroes/superheroes.module').then(
        (m) => m.SuperheroesModule
      ),
  },
  {
    path: '',
    redirectTo: 'superheroes',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
