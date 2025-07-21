import { Component } from '@angular/core';
import { NavigationBarComponent } from '../../components/navigation-bar/navigation-bar.component';
import { ContAppsComponent } from '../../components/cont-apps/cont-apps.component';


@Component({
  selector: 'app-projects',
  imports: [NavigationBarComponent, ContAppsComponent],
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

}
