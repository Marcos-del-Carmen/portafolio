import { Component } from '@angular/core';
import { NavigationBarComponent } from '../../components/navigation-bar/navigation-bar.component';
import { ContAppsComponent } from '../../components/cont-apps/cont-apps.component';

@Component({
  selector: 'app-welcome',
  imports: [NavigationBarComponent, ContAppsComponent],
  standalone: true,
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {

}
