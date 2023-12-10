import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {


  private titulo: BehaviorSubject<string> = new BehaviorSubject('Login de Acceso')
  private usuario: BehaviorSubject<string> = new BehaviorSubject('')
  private resetLoginForm = new BehaviorSubject<boolean>(false);
  
  constructor() { }

  get getTitulo() {
    return this.titulo.asObservable();
  }

  set setTitulo(titulo:string) {
    this.titulo.next(titulo);
  }

  get getUsuario() {
    return this.usuario.asObservable();
  }

  set setUsuario(usuario: string) {
    this.usuario.next(usuario);
  }

  get resetLoginForm$() {
    return this.resetLoginForm.asObservable();
  }

  triggerLoginFormReset(shouldReset: boolean) {
    this.resetLoginForm.next(shouldReset);
  }
}
