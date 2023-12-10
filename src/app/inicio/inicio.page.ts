import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from '../state/state.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  nombreDeUsuario: string = '';

  constructor(private router:Router, private stateServices: StateService) { }

  ngOnInit() {
    this.stateServices.getUsuario.subscribe((usuario) => {
      this.nombreDeUsuario = usuario;
      console.log('Nombre de usuario en InicioPage:', usuario);
    });
  }


  irAInicio() {
    this.stateServices.setTitulo = 'Página de Inicio';
    this.router.navigate(['/inicio']);

  }

  irCerrar() {
    this.stateServices.setTitulo = 'Login de Acceso';
    this.router.navigate(['/login']);
    this.stateServices.triggerLoginFormReset(true);
  }
}