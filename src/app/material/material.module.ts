import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';

@NgModule({
  exports: [
    MatCardModule,
    MatChipsModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
  ],
})
export class MaterialModule {}
