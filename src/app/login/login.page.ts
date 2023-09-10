import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from '../state/state.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  formularioLogin: FormGroup;
  errorMessageu: string = '';
  errorMessagep: string = '';

  constructor(private fb: FormBuilder,  private router:Router, private stateServices:StateService) { 

    this.formularioLogin=this.fb.group({
      usuario: ['', Validators.required],
      contraseña: ['',Validators.required]
    });
  }

  ngOnInit() {
  }

  irAInicio() {
    // Comprobar si el campo de usuario está vacío
    if (!this.formularioLogin.value.usuario) {
      this.errorMessageu = 'El campo de usuario es obligatorio.';
    }

    // Comprobar si el campo de contraseña está vacío
    if (!this.formularioLogin.value.contraseña) {
      this.errorMessagep = 'La contraseña es obligatorio.';
    }

    if (this.formularioLogin.valid) {
      const nombreDeUsuario = this.formularioLogin.value.usuario;
      this.stateServices.setUsuario = nombreDeUsuario;
      this.stateServices.setTitulo = 'Página de Inicio';
      this.router.navigate(['/inicio']);
    }
  }

  irARecuperar() {
    this.stateServices.setTitulo = 'Recuperar Contraseña';
    this.router.navigate(['/recuperar']);
  }


}
