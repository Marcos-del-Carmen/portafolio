import { Component } from '@angular/core';

@Component({
  selector: 'app-cont-apps',
  imports: [],
  standalone: true,
  templateUrl: './cont-apps.component.html',
  styleUrl: './cont-apps.component.css'
})
export class ContAppsComponent {

  public apps = [
    { name: 'Ionic',    description: 'Description of App 1', link: 'https://example.com/app1' },
    { name: 'Angular',  description: 'Description of App 1', link: 'https://example.com/app1' },
    { name: 'Java',     description: 'Description of App 1', link: 'https://example.com/app1' },
    { name: 'Figma',    description: 'Description of App 1', link: 'https://example.com/app1' },
    { name: 'Bizzagi',  description: 'Description of App 1', link: 'https://example.com/app1' },
    { name: 'MySQL',    description: 'Description of App 1', link: 'https://example.com/app1' },
    { name: 'Firebase', description: 'Description of App 1', link: 'https://example.com/app1' },
    { name: 'Vue',      description: 'Description of App 1', link: 'https://example.com/app1' },
    { name: 'Bituyu',   description: 'Description of App 1', link: 'https://example.com/app1' },
  ]
}
