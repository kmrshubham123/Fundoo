import { Component, Input, OnInit ,Output} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdatenoteComponent } from '../updatenote/updatenote.component';
import { NoteService } from '../../services/noteservice/note.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  constructor(public dialog: MatDialog,private noteService: NoteService,
              private matSnackBar:MatSnackBar) {}

  @Input() NoteArray: any;

 

  ngOnInit(){
    console.log(this.NoteArray)
  }
  
  openDialog(notecard: any): void {
    const dialogRef = this.dialog.open(UpdatenoteComponent, {
      width: '550px',
      data: notecard
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed',result);

    });
  }
  
}
