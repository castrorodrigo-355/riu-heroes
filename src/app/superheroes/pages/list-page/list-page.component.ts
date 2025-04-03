// import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IHero } from '../../interfaces/hero.interface';
import { SuperheroesService } from '../../services/superheroes.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styles: [],
})
export class ListPageComponent {
  heroes$: Observable<IHero[]>;
  isLoading$: Observable<boolean>;

  constructor(private superheroesService: SuperheroesService) {
    this.heroes$ = this.superheroesService.heroes$;
    this.isLoading$ = this.superheroesService.isLoading$;
  }

  onDeleteHero(id: string): void {
    console.log(id);
  }
}
