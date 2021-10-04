import { Component, OnInit } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef,OnDestroy} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EditlabelComponent } from '../editlabel/editlabel.component';
import { NoteService } from '../../services/noteservice/note.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  labelList:any;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,private matSnackBar:MatSnackBar,
              private matDialog:MatDialog,public dialog: MatDialog, private noteService:NoteService
              ) {
   
  }

  applicationName!: string
  ngOnInit(){
    this.getLabels()
    this.applicationName = "FundooNotes";
  }
  openEditLables(){
    const dialogRef = this.dialog.open(EditlabelComponent,{
      width: '',
      height:''
      
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed',result);

    });
  }
  
  getLabels(){
    console.log("Getnotes");

    this.noteService.getLabelService().subscribe((response:any)=>{
      console.log(response);

      this.labelList = response['data'].details
      console.log('labelList', this.labelList);
     
      
    },error =>{
      console.log(error);
  
    })
    
  }

}
  
