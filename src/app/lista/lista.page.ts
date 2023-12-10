import { Component, OnInit } from '@angular/core';
import { DummyService } from '../services/dummy.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {

  public users: any[] = [];

  constructor(private dummyService: DummyService, private router: Router) { }

  ngOnInit() {
    this.dummyService.getDummyData().subscribe((data: any) => {
      // Filtra los usuarios con un ID válido antes de asignarlos a this.users
      this.users = data.results.filter((user: { id: { value: any; }; }) => user.id && user.id.value);

      localStorage.setItem('users', JSON.stringify(this.users));
    });
  }

  detalle(usuario: any) {
    const userIdValue = usuario.id && usuario.id.value;
  
    if (userIdValue) {
      localStorage.setItem('users', JSON.stringify([usuario])); // Almacena solo el usuario seleccionado en 'users'
      this.router.navigateByUrl(`conductor/${userIdValue}`);
    } else {
      console.error('El usuario no tiene un ID válido.');
    }
  }
}


  

  // detalle(usuario: any) {
  //   console.log("Este es el personaje que se va a enviar a la vista de detalle", usuario);
    
  //   const userIdValue = usuario.id && usuario.id.value; // Si existe usuario.id, entonces se asigna usuario.id.value a userIdValue, de lo contrario se asigna undefined a userIdValue.
  
  //   if (userIdValue) {
  //     localStorage.setItem('usuarioSeleccionado', JSON.stringify(userIdValue));
  //     this.router.navigateByUrl(`conductor/${userIdValue}`);
  //   } else {
  //     console.error('El usuario no tiene un ID válido.');
  //   }
  // }
  
  





// import { Component, OnInit } from '@angular/core';
// import { DummyService } from '../services/dummy.service';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-lista',
//   templateUrl: './lista.page.html',
//   styleUrls: ['./lista.page.scss'],
// })
// export class ListaPage implements OnInit {

//   public users: any;
//   public displayedUsers: any = [];
//   public itemsPerPage = 4;

//   constructor( 

//     private dummyService: DummyService,
//     private router: Router

//     ) { }

//   ngOnInit() {

//     this.dummyService.getDummyData().subscribe((data) => {
//       console.log("Se muestran los usuarios", data);
//       this.users = data;
//       localStorage.setItem('users', JSON.stringify(data));
//     });
//   }

//   detalle(usuario: any){
//     console.log("Este es el personaje que se va a enviar a la vista de detalle", usuario);
//     localStorage.setItem('usuarioSeleccionado', JSON.stringify(usuario));
//     this.router.navigateByUrl('/conductor');
//   }
// }
