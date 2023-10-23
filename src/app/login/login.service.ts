import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private isLoggedSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isLogged$=this.isLoggedSubject.asObservable();


  constructor() { }

  getIsLogged(){
    return this.isLoggedSubject.asObservable();
  }

  setIsLogged(value: boolean){
    this.isLoggedSubject.next(value);
  }
}
