import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree,Router} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthguradserviceService } from '../services/authguradservice/authguradservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(private authguradserviceService:AuthguradserviceService,private router:Router){}
  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }
  canActivate(): boolean {  

    if (!this.authguradserviceService.gettoken()) {  
        this.router.navigateByUrl("/login");  
    }  
    return this.authguradserviceService.gettoken();  
}  
  
}
