import { Component } from '@angular/core';
import { NavigationBarComponent } from '../../components/navigation-bar/navigation-bar.component';
import { ContAppsComponent } from '../../components/cont-apps/cont-apps.component';
import { NotesComponent } from '../../components/notes/notes.component';

@Component({
  selector: 'app-tools',
  imports: [NavigationBarComponent, ContAppsComponent, NotesComponent],
  templateUrl: './tools.component.html',
  styleUrl: './tools.component.css'
})
export class ToolsComponent {
  public blnButtom: boolean = true;
  public message: string = 'Estas son las herramientas que utilizo en mi día a día como desarrollador web y algunas que use por un tiempo.';
  toggleNotas() {
    this.blnButtom = !this.blnButtom;
  }
}
