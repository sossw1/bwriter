import { Component, Input, OnInit } from '@angular/core';

interface Note {
  title?: String,
  body?: String
}

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
