import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../services/noteservice/note.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-editlabel',
  templateUrl: './editlabel.component.html',
  styleUrls: ['./editlabel.component.scss']
})
export class EditlabelComponent implements OnInit {
  label:any
  show=true
  labelList:any
  move:any
  isDeleted=false
 



  constructor(private noteService: NoteService, private matSnackBar: MatSnackBar) { }

  ngOnInit(){
    this.getLabels()
  }
  
  onOpen(){
    this.show=false;
  }
  onClose(){
    this.show = true;
  }

  onCreate(){
    console.log("onCreate")
    this.show=true;

    let data = {
      label:this.label,
    isDeleted:false,
    userId: localStorage.getItem('userId')
    };
    console.log(data)
    this.noteService.createLables(data).subscribe((response:any)=>{
      this.label = null
      console.log(response)
      this.matSnackBar.open("label Added :", '', { duration: 3000, });
   
      
    },(error:any) =>{
      console.log(error);

      this.matSnackBar.open("label not added !", 'Try Again', { duration: 3000, });

    })
  }
  getLabels(){
    console.log("GetLabelsnotes");

    this.noteService.getLabelService().subscribe((response:any)=>{
      console.log(response);

      this.labelList = response['data'].details
      console.log('labelList', this.labelList);
     
      
    },error =>{
      console.log(error);
  
    })
    
  }
  

  deleteLabel(labelList:any){
    console.log("Delete_Labels_notes");
    let data ={
      labelList:labelList,
      isDeleted:false,
    }
    console.log("delete Label",data);
    this.noteService.deleteLablesService(data).subscribe((response:any)=>{
      this.matSnackBar.open("label Deleted :", 'Successfull', { duration: 3000, });
    },error => {
      console.log(error);
      this.matSnackBar.open("label Not Deleted :", 'error', { duration: 3000, });
      
    })
    
  }

  updateLabel(labelList:any){
    console.log("Update_Labels_notes");
    let data={
      labelList:labelList,
      isDeleted:false,
      // userId: localStorage.getItem('userId')
    }
    console.log("update data ",data)
    this.noteService.updateLablesService(data).subscribe((response:any)=>{

      this.matSnackBar.open("label Updated :", 'Successfull', { duration: 3000, });
      console.log(response)
    },error=>{
      console.log(error);
      this.matSnackBar.open("label not Updated :", 'error', { duration: 3000, });
      
    })

  }

}
