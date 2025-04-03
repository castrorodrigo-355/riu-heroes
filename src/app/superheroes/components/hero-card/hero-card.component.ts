import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IHero } from '../../interfaces/hero.interface';

@Component({
  selector: 'heroes-hero-card',
  templateUrl: './hero-card.component.html',
  styles: [],
})
export class HeroCardComponent implements OnInit {
  @Input()
  public hero!: IHero;

  @Output() eventEmitter = new EventEmitter<string>();

  ngOnInit(): void {
    if (!this.hero) throw Error('Hero property is required');
  }

  deleteHero(): void {
    this.eventEmitter.emit(this.hero.id);
  }
}
