import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  imports: [],
  standalone: true,
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.css'
})
export class NavigationBarComponent {
  
  public itemsNavigations = [
    { name: 'Bienvenida',   link: '/' },
    { name: 'Herramientas', link: '/herramientas' },
    { name: 'Cursos',       link: '/cursos' },
    { name: 'Proyectos',    link: '/proyectos' },
  ]

  constructor(private _router: Router) {}

  navigateTo(link: string) {
    this._router.navigate([link]);
  }
}
