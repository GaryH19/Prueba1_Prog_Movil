import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conductor',
  templateUrl: './conductor.page.html',
  styleUrls: ['./conductor.page.scss'],
})
export class ConductorPage implements OnInit {

  public userDos: any;

  constructor() { }

  ngOnInit() {

    const _usuario = localStorage.getItem('usuarioSeleccionado');
    if(_usuario == null){
      console.log('No se encontraron datos en localStorage');

    }
    else{
      this.userDos = JSON.parse(_usuario);
      console.log("Este es el personaje que se va a mostrar en la vista de detalle", this.userDos);
    }
  }
}
