import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-conductor',
  templateUrl: './conductor.page.html',
  styleUrls: ['./conductor.page.scss'],
})
export class ConductorPage implements OnInit {
  public userDos: any;
  public selectedUserId: string = '';

  constructor(
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.selectedUserId = params.get('id') || '';
  
      if (!this.selectedUserId) {
        console.log('No se proporcionó un ID de usuario en la ruta');
      } else {
        const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
        const selectedUser = storedUsers.find((user: { id: { value: string; }; }) => user.id.value === this.selectedUserId);

        if (selectedUser) {
          this.userDos = selectedUser;
          console.log('Detalles del usuario:', this.userDos);
        } else {
          console.error('No se encontró el usuario en el almacenamiento local.');
        }
      }
    });
  }
}





// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { DummyService } from '../services/dummy.service';

// @Component({
//   selector: 'app-conductor',
//   templateUrl: './conductor.page.html',
//   styleUrls: ['./conductor.page.scss'],
// })
// export class ConductorPage implements OnInit {
//   public userDos: any;
//   public selectedUserId: string = '';

//   constructor(
//     private route: ActivatedRoute,
//     private dummyService: DummyService
//   ) {}

//   ngOnInit() {
//     this.route.paramMap.subscribe(params => {
//       this.selectedUserId = params.get('id') || '';
  
//       if (!this.selectedUserId) {
//         console.log('No se proporcionó un ID de usuario en la ruta');
//       } else {
//         this.dummyService.getUserDetails(this.selectedUserId).subscribe(
//           (userData) => {
//             if (userData.results && userData.results.length > 0) {
//               // Asigna directamente el usuario al array results
//               this.userDos = userData.results[0];
//               console.log('Detalles del usuario:', this.userDos);
//             } else {
//               console.error('No se encontraron resultados de usuario en la respuesta.');
//             }
//           },
//           (error) => {
//             console.error('Error al obtener detalles del usuario:', error);
//           }
//         );
//       }
//     });
//   }
  
// }




