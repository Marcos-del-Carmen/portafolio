import { Component } from '@angular/core';
import { NotesComponent } from '../notes/notes.component';

@Component({
  selector: 'app-navigation-bar',
  imports: [NotesComponent],
  standalone: true,
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.css'
})
export class NavigationBarComponent {
  public blnButtom: boolean = true;
  public message: string = 'Hola, soy Marcos vivo en Chilapa de Álvarez en el estado de Guerrero.';
  
  public itemsNavigations = [
    { name: 'Bienvenida',   link: '/' },
    { name: 'Herramientas', link: '/' },
    { name: 'Cursos',       link: '/' },
    { name: 'Proyectos',    link: '/' },
  ]
}
