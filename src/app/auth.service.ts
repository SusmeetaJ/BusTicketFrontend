import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate 
{
  

  constructor(public router:Router) { }
  isLoggedIn()
  {
   return (sessionStorage.getItem("isloggedIn") == "1");
  }
  isAdminLoggedin()
  {
    return (sessionStorage.getItem("isloggedIn")=="1" && sessionStorage.getItem("roleid")=="1");
  }
  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot)
  {
      if(this.isLoggedIn())
      {
          return true;
      }
      else
      {
          this.router.navigate(['signin']);
          return false;
      }
  }
}
