import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NoteService } from '../../services/noteservice/note.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataService } from '../../services/dataService/data.service';

@Component({
  selector: 'app-takenote',
  templateUrl: './takenote.component.html',
  styleUrls: ['./takenote.component.scss']
})
export class TakenoteComponent implements OnInit {
  title: any
  description: any
  @Output() createNoteRefreshEvent = new EventEmitter<any>();

  show = false
  constructor(private noteService: NoteService, private matSnackBar: MatSnackBar,private dataService:DataService) { }

  ngOnInit() {
  }
 

  onClick() {
    this.show = true
  }

  onClose() {
    this.show=false;
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

}
