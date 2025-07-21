import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cont-apps',
  imports: [],
  standalone: true,
  templateUrl: './cont-apps.component.html',
  styleUrl: './cont-apps.component.css'
})
export class ContAppsComponent {
  @Input() itemsApp: any[] = [];

  constructor() {
    console.log('cont apps:', this.itemsApp);
  }
}
