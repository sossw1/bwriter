import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { NoteComponent } from './note/note.component';
import { NoteListComponent } from './note-list/note-list.component';
import { NoteListItemComponent } from './note-list-item/note-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    NoteComponent,
    NoteListComponent,
    NoteListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
