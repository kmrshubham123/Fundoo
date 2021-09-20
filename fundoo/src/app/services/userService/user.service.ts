import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService :HttpService) { }

  registerUser(requestdata:any){
    return this.httpService.Post('user/userSignUp',requestdata)
  }
  // loginUser(requestdata: { email: string; password: string;}) {

  //   return this.httpService.Post('/user/login',requestdata)

  // }
   
}
