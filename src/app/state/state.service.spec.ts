import { TestBed } from '@angular/core/testing';
import { StateService } from './state.service';

describe('StateService', () => {
  let service: StateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StateService);
  });

  it('debería ser creado', () => {
    const servicio = TestBed.inject(StateService);
    expect(servicio).toBeTruthy();
  });

  it('debería poder establecer y obtener el título', (done: DoneFn) => {
    const nuevoTitulo = 'Nuevo Título';
    //Se establece un titulo nuevo
    service.setTitulo = nuevoTitulo;
    // Obtener el título y verificar
    service.getTitulo.subscribe(titulo => {
      expect(titulo).toEqual(nuevoTitulo);
      done();
    });
  });

  it('debería poder establecer y obtener el usuario', (done: DoneFn) => {
    const nuevoUsuario = 'UsuarioPrueba';
    // Establecer el usuario
    service.setUsuario = nuevoUsuario;
    // Obtener el usuario y verificar
    service.getUsuario.subscribe(usuario => {
      expect(usuario).toEqual(nuevoUsuario);
      done();
    });
  });

  // Se limpia el servicio antes de cada prueba
  beforeEach(() => {
    service = TestBed.inject(StateService);
  });
});