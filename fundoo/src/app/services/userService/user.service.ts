
import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService :HttpService) { }

  registerUser(requestdata:any){
    console.log(requestdata);
    return this.httpService.Post('/user/userSignUp',requestdata)
  }

  loginUser(requestdata:any) {
    console.log(requestdata);
   return this.httpService.Post('/user/login',requestdata)

  }
  
  forgotUser(requestdata : any){
    console.log(requestdata);
    return this.httpService.Post('/user/reset',requestdata)
  }
  
  resetpasswordUser(requestdata : any, token:any){
    console.log(requestdata);
    return this.httpService.Post('/user/reset-password',requestdata)
    
  }

   
}
