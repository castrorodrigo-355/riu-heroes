import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface ISidebarITem {
  label: string;
  icon: string;
  url: string;
}

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styles: [],
})
export class MainLayoutComponent {
  public sidebarItems: ISidebarITem[] = [
    { label: 'Superheroes', icon: 'label', url: './list' },
    { label: 'Hero Form', icon: 'add', url: './create-hero' },
  ];
}
