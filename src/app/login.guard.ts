import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from './login/login.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) { }

  canActivate(): boolean {
    let isLogged = false;

    this.loginService.isLogged$.subscribe((value: boolean) => {
      isLogged = value;
      if (!value) {
        this.router.navigateByUrl('/login');
      }
    });
    return isLogged;
  }
}
