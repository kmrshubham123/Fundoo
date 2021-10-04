import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../services/noteservice/note.service';

@Component({
  selector: 'app-getallnotes',
  templateUrl: './getallnotes.component.html',
  styleUrls: ['./getallnotes.component.scss']
})
export class GetallnotesComponent implements OnInit {

  NoteList=[];
  
  constructor(private noteService: NoteService) { }

  ngOnInit() {

    this.getAllNotes()
  }

  getAllNotes() {
    let notesArchive = [];


    this.noteService.getAllNoteService().subscribe((response: any) => {
      console.log(response);

      notesArchive = response.data.data;
      this.NoteList= notesArchive.filter((data:any) => data.isArchived != true && data.isDeleted != true); //filter for archieve
      
      this.NoteList.reverse()
      console.log("noteList",this.NoteList)
    },
      error => {
        console.log(error);

      }
    )

  }
}
