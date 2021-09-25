import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdatenoteComponent } from '../updatenote/updatenote.component';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  @Input() NoteArray: any;
  

  ngOnInit(){
    console.log(this.NoteArray)
  }
  
  openDialog(notecard: any): void {
    const dialogRef = this.dialog.open(UpdatenoteComponent, {
      width: '350px',
      data: notecard
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed',result);

    });
  }

}
