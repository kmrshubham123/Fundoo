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
 


  constructor(private noteService: NoteService,private matSnackBar:MatSnackBar,) { }

  ngOnInit(): void {
  }

  deleteNote() {
    let req = {
      noteIdList: [this.notecard.id],
      isDeleted: false,
    }
    this.noteService.deleteNoteService(req).subscribe((response) => {
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
  setColor(color: any){
    this.notecard.color = color;
    console.log('color',color);
    let data = {
      color: color,
      noteIdList: [this.notecard.id],
    }
    console.log(data);
    this.noteService.changeColorService(data).subscribe(
      (response:any)=>{ 
        // this.getNotes.emit(color)
        console.log('Response of setColour',response);
        this.matSnackBar.open('Background color Changed','',{duration:2000,})
      },
      (error:any) => {
        this.matSnackBar.open('Error occured ','try Again',{duration:2000,})
      }
      );
   }
  // archiveNote() {
  //   this.archive.emit();
  // }
  // unArchiveNote() {
  //   this.unarchive.emit();
  // }

}
