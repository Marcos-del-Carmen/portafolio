import { Component, OnInit } from '@angular/core';
import { NavigationBarComponent } from '../../components/navigation-bar/navigation-bar.component';
import { ContAppsComponent } from '../../components/cont-apps/cont-apps.component';
import { NotesComponent } from '../../components/notes/notes.component';
import { AppItems } from '../../models/AppItems.models';

@Component({
  selector: 'app-welcome',
  imports: [NavigationBarComponent, ContAppsComponent, NotesComponent],
  standalone: true,
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements OnInit {
  public blnButtom: boolean = true;
  public message: string = 'Hola, soy Marcos vivo en Chilapa de Álvarez en el estado de Guerrero.';

  public apps:any = [];

  constructor() { }
  
  ngOnInit(): void {   
    this.cargarItems();
  }

  cargarItems(): void {
    this.apps.push(...AppItems.Languages);
    this.apps.push(...AppItems.Tools);
    this.apps.push(...AppItems.Coruses);
    return this.apps;
  }
}
