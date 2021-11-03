import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bw-note-list-item',
  templateUrl: './note-list-item.component.html',
  styleUrls: ['./note-list-item.component.css']
})
export class NoteListItemComponent implements OnInit {
  @Input() note;

  constructor() { }

  ngOnInit(): void {
  }

}
