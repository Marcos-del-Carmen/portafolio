import { Component, OnInit } from '@angular/core';
import { DetailApp } from '../../../models/DetailApp.models';

@Component({
  selector: 'app-item-app',
  imports: [],
  templateUrl: './item-app.component.html',
  styleUrl: './item-app.component.css'
})
export class ItemAppComponent implements OnInit {

  public detailApp: DetailApp;

  constructor() {
    this.detailApp = {
      name: '',
      description: '',
      link: '',
      category: ''
    };
  }

  ngOnInit(): void {
    this.detailApp = history.state.item;
  }

}
