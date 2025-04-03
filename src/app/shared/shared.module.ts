import { NgModule } from '@angular/core';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';
import { MaterialModule } from '../material/material.module';
import { CommonModule } from '@angular/common';
import { CommonFilter } from './components/common-filter/common-filter.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [Error404PageComponent, CommonFilter],
  exports: [Error404PageComponent, CommonFilter],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
})
export class SharedModule {}
