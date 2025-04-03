import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  combineLatest,
  debounceTime,
  delay,
  map,
  of,
} from 'rxjs';
import { IHero } from '../interfaces/hero.interface';
import { v4 } from 'uuid';

@Injectable({ providedIn: 'root' })
export class SuperheroesService {
  private heroesSubject = new BehaviorSubject<IHero[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);

  private filteredHeroesSubject = new BehaviorSubject<IHero[]>([]);

  private heroDetailSubject = new BehaviorSubject<IHero | null>(null);
  private heroDetailLoadingSubject = new BehaviorSubject<boolean>(false);

  private loadingDeleteSubject = new BehaviorSubject<boolean>(false);

  heroes$ = this.heroesSubject.asObservable();
  isLoading$ = this.loadingSubject.asObservable();

  filteredHeroes$ = this.filteredHeroesSubject.asObservable();

  heroDetail$ = this.heroDetailSubject.asObservable();
  heroDetailLoading$ = this.heroDetailLoadingSubject.asObservable();

  isDeleting$ = this.loadingDeleteSubject.asObservable();

  constructor() {
    this._loadHeroes();
  }

  private _loadHeroes(): void {
    this.loadingSubject.next(true);
    of([
      { id: v4(), name: 'Riuman' },
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

  filterHeroes(searchTerm: string): void {
    const heroes = this.heroesSubject.getValue();
    const filtered = heroes.filter((hero) =>
      hero.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    this.filteredHeroesSubject.next(filtered);
  }

  getHeroById(id: string): void {
    this.heroDetailLoadingSubject.next(true);
    const heroes = this.heroesSubject.getValue();
    const foundHero = heroes.find((hero) => hero.id === id) || null;

    of(foundHero)
      .pipe(delay(1000))
      .subscribe((hero) => {
        this.heroDetailSubject.next(hero);
        this.heroDetailLoadingSubject.next(false);
      });
  }

  deleteHero(id: string): void {
    this.loadingDeleteSubject.next(true);

    setTimeout(() => {
      const currentHeroes = this.heroesSubject.getValue();
      const updatedHeroes = currentHeroes.filter((hero) => hero.id !== id);
      this.heroesSubject.next(updatedHeroes);
      this.loadingDeleteSubject.next(false);
    }, 1500);
  }
}
