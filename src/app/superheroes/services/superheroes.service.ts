import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, of } from 'rxjs';
import { IHero } from '../interfaces/hero.interface';
import { v4 } from 'uuid';

@Injectable({ providedIn: 'root' })
export class SuperheroesService {
  private heroesSubject = new BehaviorSubject<IHero[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);

  heroes$ = this.heroesSubject.asObservable();
  isLoading$ = this.loadingSubject.asObservable();

  constructor() {
    this._loadHeroes();
  }

  private _loadHeroes(): void {
    this.loadingSubject.next(true);
    of([
      { id: v4(), name: 'Batman' },
      { id: v4(), name: 'Ironman' },
      { id: v4(), name: 'Superman' },
    ])
      .pipe(delay(2000))
      .subscribe((heroes) => {
        this.heroesSubject.next(heroes);
        this.loadingSubject.next(false);
      });
  }
}
