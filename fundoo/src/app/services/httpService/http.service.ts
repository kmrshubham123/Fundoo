import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
BaseUrl = environment.BaseUrl

//url = '/user/userSignUp'
  constructor(private http: HttpClient) { }
 

  Post( url: string , requestdata:any){
    let httpAuthOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
       // 'token': token
      })
    };
    let FullUrl = this.BaseUrl + url
    return this.http.post(FullUrl,requestdata,httpAuthOptions)

  }

  Get(){

  }
  Update(){

  }

  Delete(){

  }


}
