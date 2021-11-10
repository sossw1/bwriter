import { Component, OnInit, Input } from '@angular/core';
import Note from '../../interfaces/Note';

@Component({
  selector: 'bw-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  @Input() note: Note = {
    title: '',
    body: ''
  };

  constructor() { }

  ngOnInit(): void {
  }
}
