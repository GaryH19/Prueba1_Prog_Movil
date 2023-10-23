import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

import { LoginService } from './login/login.service';


@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(
    private loginServices:LoginService,
    private router: Router
  ){ }

  canActivate(): boolean {
    let isLogged: boolean = false;
    this.loginServices.isLogged$.subscribe((value:boolean) => {
      isLogged = value;
      if(!value){
        this.router.navigateByUrl('/login');
      }
    });
    return isLogged;
  }
}
