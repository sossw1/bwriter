import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Note from '../../interfaces/Note';

@Component({
  selector: 'bw-note-list-item',
  templateUrl: './note-list-item.component.html',
  styleUrls: ['./note-list-item.component.css']
})
export class NoteListItemComponent implements OnInit {
  @Input() note: Note = {
    title: '',
    body: ''
  };

  @Output() deleteNoteEvent = new EventEmitter<string>();
  deleteNote(value: string) {
    this.deleteNoteEvent.emit(value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
