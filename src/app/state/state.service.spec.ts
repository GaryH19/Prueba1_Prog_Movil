import { TestBed } from '@angular/core/testing';
import { StateService } from './state.service';

describe('StateService', () => {
  let service: StateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StateService);
  });

  it('debería ser creado', () => {
    expect(service).toBeTruthy();
  });

  it('debería poder establecer y obtener el título', (done: DoneFn) => {
    service.setTitulo = 'Nuevo Título';
    service.getTitulo.subscribe(titulo => {
      expect(titulo).toEqual('Nuevo Título');
      done();
    });
  });

  it('debería poder establecer y obtener el usuario', (done: DoneFn) => {
    service.setUsuario = 'UsuarioPrueba';
    service.getUsuario.subscribe(usuario => {
      expect(usuario).toEqual('UsuarioPrueba');
      done();
    });
  });
});


