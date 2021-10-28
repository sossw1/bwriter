import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bw-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  notes = [
    { title: 'test' }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
