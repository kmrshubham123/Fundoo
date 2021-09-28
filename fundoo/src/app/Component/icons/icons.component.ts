import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { NoteService } from '../../services/noteservice/note.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  @Input() notecard: any;
  // @Output() archive: EventEmitter<any> = new EventEmitter();
  // @Output() unarchive: EventEmitter<any> = new EventEmitter();

  @Output() color: EventEmitter<any> = new EventEmitter();

  isArchived = false;
  isDeleted=false;



  constructor(private noteService: NoteService, private matSnackBar: MatSnackBar,) { }

  ngOnInit(): void {
  }

  foreverdeleteNote() {
    let req = {
      noteIdList: [this.notecard.id],
      isDeleted: false,
    }
    this.noteService.foreverdeleteNoteService(req).subscribe((response) => {
      console.log(response);

    })
    console.log();

  }

  // colorlense


  colors: Array<any> = [
    { code: '#ffffff', name: 'white' },
    { code: '#FF6347', name: 'red' },
    { code: '#FF4500', name: 'orange' },
    { code: '#FFFF00', name: 'yellow' },
    { code: '#ADFF2F', name: 'green' },
    { code: '#43C6DB', name: 'teal' },
    { code: '#728FCE', name: 'Blue' },
    { code: '#2B65EC', name: 'darkblue' },
    { code: '#D16587', name: 'purple' },
    { code: '#F9A7B0', name: 'pink' },
    { code: '#E2A76F', name: 'brown' },
    { code: '#D3D3D3', name: 'grey' },
  ];
  setColor(color: any) {
    this.notecard.color = color;
    console.log('color', color);
    let data = {
      color: color,
      noteIdList: [this.notecard.id],
    }
    console.log(data);
    this.noteService.changeColorService(data).subscribe(
      (response: any) => {
        // this.getNotes.emit(color)
        console.log('Response of setColour', response);
        this.matSnackBar.open('Background color Changed', '', { duration: 2000, })
      },
      (error: any) => {
        this.matSnackBar.open('Error occured ', 'try Again', { duration: 2000, })
      }
    );
  }




  archive() {
    console.log("Archive note");
    let data = {
      noteIdList: [this.notecard.id],
      isArchived: this.isArchived,
    }
    console.log(data)
    this.noteService.ArchiveNoteService(data).subscribe((response: any) => {
      console.log('response archieve', response);
      this.matSnackBar.open('archieve suscessed', '', { duration: 2000, })

    }, (error: any) => {
      this.matSnackBar.open('Error occured ', 'try Again', { duration: 2000, })
    })

  }

  trash(){
    console.log("Trash note");
    let data = {
     
      noteIdList: [this.notecard.id],
      isDeleted: this.isDeleted,
    }
    console.log(data)
    this.noteService.TrashNoteService(data).subscribe((response:any)=>{
      console.log('response Trash', response);
      this.matSnackBar.open('Note Bin','',{duration:2000, })
    },(error:any)=>{
      console.log(error);
      this.matSnackBar.open('Error occured ', 'try Again', { duration: 2000, })
      
    })
  }




}
