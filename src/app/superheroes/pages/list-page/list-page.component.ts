// import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IHero } from '../../interfaces/hero.interface';
import { SuperheroesService } from '../../services/superheroes.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styles: [],
})
export class ListPageComponent {
  heroes$: Observable<IHero[]>;
  isLoading$: Observable<boolean>;
  filteredHeroes$: Observable<IHero[]>;

  constructor(
    private superheroesService: SuperheroesService,
    private router: Router
  ) {
    this.heroes$ = this.superheroesService.heroes$;
    this.isLoading$ = this.superheroesService.isLoading$;
    this.filteredHeroes$ = this.superheroesService.filteredHeroes$;
  }

  onDeleteHero(id: string): void {
    console.log(id);
  }

  onSearchHero(term: string): void {
    this.superheroesService.filterHeroes(term);
  }

  onSelectItem(hero: IHero): void {
    this.router.navigate(['/superheroes/', hero.id]);
  }
}
