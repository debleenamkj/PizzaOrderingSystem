import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { CustomerServiceService } from './customer-service.service';

@Injectable({
  providedIn: 'root'
})
export class SecuredLoginGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if(this.service.isLoggedIn){
        return true;
      }
      else{
        this.router.navigate(['']);
        return false;
      }
  }
  
  constructor(private service:CustomerServiceService, private router:Router){}
}
