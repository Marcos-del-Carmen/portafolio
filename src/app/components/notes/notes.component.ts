import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-notes',
  imports: [],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.css'
})
export class NotesComponent {
  @Input() blnButtom: boolean | undefined;
  @Input() message: string | undefined;

  constructor() {}
  
}