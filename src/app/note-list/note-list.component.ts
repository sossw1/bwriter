import { Component, Input, OnInit } from '@angular/core';
import Note from '../../interfaces/Note';

@Component({
  selector: 'bw-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {
  @Input() notes: Array<Note> = [];
  constructor() { }

  ngOnInit(): void {
  }

}
