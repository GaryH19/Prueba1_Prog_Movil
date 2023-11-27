import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { DummyService } from '../services/dummy.service';
import { ListaPage } from './lista.page';
import { Router } from '@angular/router';

describe('ListaPage', () => {
  let component: ListaPage;
  let fixture: ComponentFixture<ListaPage>;
  let dummyServiceMock: jasmine.SpyObj<DummyService>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    dummyServiceMock = jasmine.createSpyObj('DummyService', ['getDummyData']);
    dummyServiceMock.getDummyData.and.returnValue(of([{ id: 1, name: 'User 1' }, { id: 2, name: 'User 2' }]));

    TestBed.configureTestingModule({
      declarations: [ ListaPage ],
      imports: [ RouterTestingModule ],
      providers: [
        { provide: DummyService, useValue: dummyServiceMock }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.inject(Router);
    spyOn(router, 'navigateByUrl');
  });

  it('debería crear', () => {
    expect(component).toBeTruthy();
  });

  it('debería cargar usuarios desde DummyService', () => {
    expect(component.users).toEqual([{ id: 1, name: 'User 1' }, { id: 2, name: 'User 2' }]);
    expect(dummyServiceMock.getDummyData).toHaveBeenCalled();
  });

  it('debería navegar a la página de detalle al llamar a detalle', () => {
    const userDummy = { id: 1, name: 'User 1' };
    component.detalle(userDummy);
    expect(router.navigateByUrl).toHaveBeenCalledWith('/conductor');
    expect(localStorage.getItem('usuarioSeleccionado')).toBe(JSON.stringify(userDummy));
  });

  it('debería manejar una respuesta vacía del servicio', () => {
    dummyServiceMock.getDummyData.and.returnValue(of([]));
    fixture = TestBed.createComponent(ListaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component.users.length).toBe(0);
  });

});