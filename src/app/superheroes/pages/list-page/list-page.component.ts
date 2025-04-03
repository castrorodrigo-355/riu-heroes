// import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IHero } from '../../interfaces/hero.interface';
import { SuperheroesService } from '../../services/superheroes.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../../shared/components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styles: [],
})
export class ListPageComponent {
  heroes$: Observable<IHero[]>;
  isLoading$: Observable<boolean>;
  filteredHeroes$: Observable<IHero[]>;
  isDeleting$: Observable<boolean>;

  constructor(
    private superheroesService: SuperheroesService,
    private router: Router,
    private dialog: MatDialog
  ) {
    this.heroes$ = this.superheroesService.heroes$;
    this.isLoading$ = this.superheroesService.isLoading$;
    this.filteredHeroes$ = this.superheroesService.filteredHeroes$;
    this.isDeleting$ = this.superheroesService.isDeleting$;
  }

  onSearchHero(term: string): void {
    this.superheroesService.filterHeroes(term);
  }

  onSelectItem(hero: IHero): void {
    this.router.navigate(['/superheroes/', hero.id]);
  }

  onDeleteHero(id: string) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '400px',
      data: { name: id, isLoading: this.isDeleting$ },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.superheroesService.deleteHero(id);
      }
    });
  }
}
