import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  
  titulo: BehaviorSubject<string> = new BehaviorSubject('Login de Acceso')
  usuario: BehaviorSubject<string> = new BehaviorSubject('')

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


}
