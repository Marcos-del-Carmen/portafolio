import { Component } from '@angular/core';
import { NavigationBarComponent } from '../../components/navigation-bar/navigation-bar.component';
import { ContAppsComponent } from '../../components/cont-apps/cont-apps.component';
import { NotesComponent } from '../../components/notes/notes.component';

@Component({
  selector: 'app-courses',
  imports: [NavigationBarComponent, ContAppsComponent, NotesComponent],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
  public blnButtom: boolean = true;
  public message: string = 'Algunos de los cursos que he tomado para mejorar mis habilidades como desarrollador web.';

  toggleNotas() {
    this.blnButtom = !this.blnButtom;
  }
}
