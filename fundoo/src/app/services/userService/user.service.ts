
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  token:any
  BaseUrl=environment.BaseUrl;

  constructor(private httpService :HttpService) {
    this.token = localStorage.getItem('token')
   }

  registerUser(requestdata:any){
    let httpAuthOptions ={
      headers:new Headers({
        'Content-Type':'application/json',
        'Authorization': this.token
      })
    };
    console.log(requestdata);
    return this.httpService.PostService(this.BaseUrl+'/user/userSignUp',requestdata,false,httpAuthOptions)
  }

  // loginUser(requestdata:any) {
  //   console.log(requestdata);
  //  return this.httpService.Post('/user/login',requestdata)

  // }

    
  loginUser(requestdata:any) {
    let httpAuthOptions ={
      headers:new Headers({
        'Content-Type':'application/json',
        'Authorization': this.token
      })
    };
    console.log(requestdata);
   return this.httpService.PostService(this.BaseUrl+'/user/login',requestdata,false,httpAuthOptions)

  }
  
  forgotUser(requestdata : any){
    let httpAuthOptions ={
      headers:new Headers({
        'Content-Type':'application/json',
        'Authorization': this.token
      })
    };
    console.log(requestdata);
    return this.httpService.PostService(this.BaseUrl+'/user/reset',requestdata,false,httpAuthOptions)
  }
  
  resetpasswordUser(requestdata : any, token:any){
    let httpAuthOptions ={
      headers:new Headers({
        'Content-Type':'application/json',
        'Authorization': this.token
      })
    };
    console.log(requestdata);
    return this.httpService.PostService(this.BaseUrl+'/user/reset-password',requestdata,false,httpAuthOptions)
    
  }



   
}


