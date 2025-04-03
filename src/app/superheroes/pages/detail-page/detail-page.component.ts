import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IHero } from '../../interfaces/hero.interface';
import { SuperheroesService } from '../../services/superheroes.service';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styles: [],
})
export class DetailPageComponent implements OnInit {
  public hero?: IHero;

  hero$ = this.superheroesService.heroDetail$;
  isLoading$ = this.superheroesService.heroDetailLoading$;

  constructor(
    private superheroesService: SuperheroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const heroId = this.activatedRoute.snapshot.paramMap.get('id');
    if (heroId) {
      this.superheroesService.getHeroById(heroId);
    }
  }

  goBack(): void {
    this.router.navigateByUrl('superheroes');
  }
}
