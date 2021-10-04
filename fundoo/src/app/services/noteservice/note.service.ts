import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class NoteService {
  BaseUrl=environment.BaseUrl
  token:any

  constructor(private httpService:HttpService ) { 
    this.token = localStorage.getItem('token')
  }
 
  // createNote( request:any){
  //   this.httpService.Post('notes/addNotes',request)

  // }


  createNotes(data:any) : Observable<any>{
    let httpAuthOptions = {
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization': this.token
      })
    };
    return this.httpService.PostService(this.BaseUrl + '/notes/addNotes',data, true, httpAuthOptions);
  }


  ArchiveNoteService(data:any):Observable<any>{
    let httpAuthOptions = {
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization': this.token
      })
    };
    return this.httpService.PostService(this.BaseUrl + '/notes/archiveNotes',data, true, httpAuthOptions);

  }
  getAllArchiveNoteService(){
    let httpAuthOptions = {
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization': this.token
      })
    };
    return this.httpService.GetService(this.BaseUrl + '/notes/getArchiveNotesList', true, httpAuthOptions);

  }


  getAllNoteService(){
    let httpAuthOptions = {
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization': this.token
      })
    };
    return this.httpService.GetService(this.BaseUrl + '/notes/getNotesList', true, httpAuthOptions);

  }
   



  
  updateNoteService(data: any){
    
    let httpAuthOptions = {
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization': this.token
      })
    };
    return this.httpService.PostService(this.BaseUrl + '/notes/updateNotes',data, true, httpAuthOptions);
  }

  foreverdeleteNoteService(data: any){
    let httpAuthOptions = {
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization': this.token
      })
    };
    return this.httpService.PostService(this.BaseUrl + '/notes/deleteForeverNotes',data, true, httpAuthOptions);
  }

  changeColorService(data:any){
    let httpAuthOptions = {
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization': this.token
      })
    };
    console.log(data);
    console.log(httpAuthOptions);
    
    return this.httpService.PostService(this.BaseUrl+'/notes/changesColorNotes',data,true, httpAuthOptions);
  }


  getTrashNoteService(){
    let httpAuthOptions = {
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization': this.token
      })
    };
    return this.httpService.GetService(this.BaseUrl + '/notes/getTrashNotesList', true, httpAuthOptions);

  }


  TrashNoteService(data:any){
    let httpAuthOptions = {
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization': this.token
      })
    };
    console.log(data);
    console.log(httpAuthOptions);
    
    return this.httpService.PostService(this.BaseUrl+'/notes/trashNotes',data,true, httpAuthOptions);
  }



  /*------------------------label service------------------------------------ */
 

  getLabelService(){
    let httpAuthOptions = {
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization': this.token
      })
    };
    return this.httpService.GetService(this.BaseUrl + '/noteLabels/getNoteLabelList', true, httpAuthOptions);

  }

  createLables(data:any) : Observable<any>{
    let httpAuthOptions = {
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization': this.token
      })
    };
    
    return this.httpService.PostService(this.BaseUrl + '/noteLabels',data, true, httpAuthOptions);
  }

  deleteLablesService(data:any) : Observable<any>{
    let httpAuthOptions = {
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization': this.token
      })
     
      
    };
    console.log("noteservice data",data.labelList.id);
    
    return this.httpService.DeleteService(this.BaseUrl +'/noteLabels/'+data.labelList.id+'/deleteNoteLabel',data, true, httpAuthOptions);
  }


  updateLablesService(data:any) : Observable<any>{
    let httpAuthOptions = {
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization': this.token
      })
     
      
    };
    console.log("noteservice data",data.id);
    
    return this.httpService.PostService(this.BaseUrl +'/noteLabels/'+ data.id + '/updateNoteLabel',data,true, httpAuthOptions);
  }
}
