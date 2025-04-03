import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { SuperheroesRoutingModule } from './superheroes-routing.module';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { FormPageComponent } from './pages/form-page/form-page.component';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { HeroCardComponent } from './components/hero-card/hero-card.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    MainLayoutComponent,
    ListPageComponent,
    FormPageComponent,
    HeroCardComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SuperheroesRoutingModule,
    MaterialModule,
    SharedModule
  ],
})
export class SuperheroesModule {}
