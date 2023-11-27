import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from '../state/state.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';

interface Usuario{
  nombre: string;
  contraseña: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  formularioLogin: FormGroup;
  nombre:string = '';

  usuario1: Usuario = {
    nombre:"admin",
    contraseña: "1234"
  }


  errorMessageu: string = '';
  errorMessagep: string = '';
 

  constructor(private fb: FormBuilder,  private router:Router, private stateServices:StateService, private loginService: LoginService) { 

    this.formularioLogin=this.fb.group({
      usuario: ["", Validators.required],
      contraseña: ["", Validators.required]
    })
  }
  
  ngOnInit() {
  }

  //Ingresar a pagina de inicio con Usuario valido
  irAInicio() {
    if (!this.formularioLogin.value.usuario || !this.formularioLogin.value.contraseña) {
      this.errorMessageu = 'Los campos de usuario y contraseña son obligatorios.';
      // return;
    }
  
    // Verificar las credenciales con el usuario predeterminado ("admin")
    const nombreDeUsuario = this.formularioLogin.value.usuario;
    const contraseña = this.formularioLogin.value.contraseña;
    
    if (nombreDeUsuario === this.usuario1.nombre && contraseña === this.usuario1.contraseña) {
      this.loginService.setIsLogged(true);
      this.nombre = nombreDeUsuario;
      this.stateServices.setUsuario = nombreDeUsuario;  //Actualiza el nombre de usuario
      this.router.navigate(['inicio']);
      
    } else {
      // Las credenciales son incorrectas, muestra un mensaje de error.
      this.errorMessageu = 'Datos ingresados Incorrectos. Por favor, inténtelo de nuevo.';
    }
  }

  
//Ir a recuperar contraseña.-
  irARecuperar() {
    this.stateServices.setTitulo = 'Recuperar Contraseña';
    this.router.navigate(['/recuperar']);
  }

}
