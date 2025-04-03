import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  exports: [MatCardModule, MatChipsModule],
})
export class MaterialModule {}
