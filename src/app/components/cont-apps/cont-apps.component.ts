import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import type { DetailApp } from '../../models/DetailApp.models';
import { query } from 'express';

@Component({
  selector: 'app-cont-apps',
  imports: [],
  standalone: true,
  templateUrl: './cont-apps.component.html',
  styleUrl: './cont-apps.component.css'
})
export class ContAppsComponent {
  @Input() itemsApp: DetailApp[] = [];

  constructor(
    private router: Router
  ) { }

  navigateApp(item: DetailApp) {
    this.router.navigate([`${item.category}/${item.name}`],
      { state: { item } }
    );
  }
}
