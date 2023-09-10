import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from '../state/state.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {

  formularioRecuperar: FormGroup;
  errorMessageu: string = '';  

  constructor(private fb: FormBuilder,  private router:Router, private stateServices: StateService) {

    this.formularioRecuperar=this.fb.group({

      usuarioRecuperar:['',Validators.required]
    })
    
   }

  ngOnInit() {
  }

  irALogin() {
    // this.stateServices.setTitulo = 'Login de Acceso';
    // this.router.navigate(['/login']);
    if(!this.formularioRecuperar.value.usuarioRecuperar){
      this.errorMessageu='El campo es obligatorio'
    }
    if(this.formularioRecuperar.valid){
      this.stateServices.setTitulo = 'Login de Acceso';
      this.router.navigate(['/login']);
    }
  }
}
