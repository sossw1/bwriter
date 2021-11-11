import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import Note from '../../interfaces/Note';

@Component({
  selector: 'bw-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css'],
})
export class NoteListComponent implements OnInit {
  @Input() notes: Array<Note> = [];

  @Output() viewNoteEvent = new EventEmitter<string>();
  viewNote(value: string) {
    this.viewNoteEvent.emit(value);
  }

  @Output() deleteNoteEvent = new EventEmitter<string>();
  deleteNote(value: string) {
    this.deleteNoteEvent.emit(value);
  }

  constructor() {}

  ngOnInit(): void {}
}
