import { Component, OnInit } from '@angular/core';
import { DummyService } from '../services/dummy.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {

  public users: any;
  public displayedUsers: any = [];
  public itemsPerPage = 4;

  constructor( 

    private dummyService: DummyService,
    private router: Router

    ) { }

  ngOnInit() {

    this.dummyService.getDummyData().subscribe((data) => {
      console.log("Se muestran los usuarios", data);
      this.users = data;
      localStorage.setItem('users', JSON.stringify(data));
    });
  }

  detalle(usuario: any){
    console.log("Este es el personaje que se va a enviar a la vista de detalle", usuario);
    localStorage.setItem('usuarioSeleccionado', JSON.stringify(usuario));
    this.router.navigateByUrl('/conductor');
  }
}
