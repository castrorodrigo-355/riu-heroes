import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-common-filter',
  templateUrl: './common-filter.component.html',
})
export class CommonFilter<T> {
  public searchInput = new FormControl('');
  @Input()
  public title!: string;
  @Input()
  public keyId!: keyof T;
  @Input()
  public keyLabel!: keyof T;
  @Input()
  public suggestedList!: Observable<T[]>;

  @Output() searchEmitter = new EventEmitter<string>();
  @Output() selectEmitter = new EventEmitter<T>();

  searchTerm(): void {
    const value: string = this.searchInput.value || '';
    this.searchEmitter.emit(value);
  }

  onSelectItem(item: T): void {
    this.selectEmitter.emit(item);
  }
}
