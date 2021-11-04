import { Component, OnInit, Input } from '@angular/core';
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

  constructor() { }

  ngOnInit(): void {
  }

}
