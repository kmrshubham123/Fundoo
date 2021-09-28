import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthguradserviceService {

  constructor() { }
  gettoken(){  
    return !!localStorage.getItem("token");  
    }  
}
