import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NoteService } from '../../services/noteservice/note.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-takenote',
  templateUrl: './takenote.component.html',
  styleUrls: ['./takenote.component.scss']
})
export class TakenoteComponent implements OnInit {
  title: any
  description: any

  show = false
  constructor(private noteService: NoteService, private matSnackBar: MatSnackBar) { }

  ngOnInit() {
  }
  @Output() createNoteRefreshEvent = new EventEmitter<any>();

  onClick() {
    this.show = true
  }

  onClose() {

    let data = {

      title: this.title,
      description: this.description
    };

    this.noteService.createNotes(data).subscribe(

      (response: any) => {
        this.title = null;
        this.description = null;
        this.matSnackBar.open("Note Added :", '', { duration: 3000, });
      },
      (error: any) => {

        this.matSnackBar.open("Note not added !", 'Try Again', { duration: 3000, });
      }
    );
  }

  createNote() {
    let request = {
      title: 'this a testing note',
      description: 'this is a test description'
    }
    this.noteService.createNotes(request).subscribe((response) => {
      console.log(response);

      this.createNoteRefreshEvent.emit(response.status.details);
      let message = response

    }, error => {
      console.log(error);
    })

    this.show = false
  }
}
