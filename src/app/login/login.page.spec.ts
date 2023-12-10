import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { LoginPage } from './login.page';
import { FormBuilder, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { StateService } from '../state/state.service';
import { LoginService } from './login.service';
import { IonicModule } from '@ionic/angular';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [LoginPage],
      imports: [ReactiveFormsModule, FormsModule, RouterTestingModule, IonicModule],
      providers: [FormBuilder, StateService, LoginService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('Debería crear un formulario con dos controles', () => {
    expect(component.formularioLogin.contains('usuario')).toBeTruthy();
    expect(component.formularioLogin.contains('contraseña')).toBeTruthy();
  });

  it('Debería hacer que el usuario y la contraseña sean requeridos', () => {
    const usuarioControl = component.formularioLogin.get('usuario');
    const contraseñaControl = component.formularioLogin.get('contraseña');
  
    if (usuarioControl && contraseñaControl) {
      usuarioControl.setValue('');
      contraseñaControl.setValue('');
      expect(usuarioControl.valid).toBeFalsy();
      expect(contraseñaControl.valid).toBeFalsy();
    } else {
      fail('Los controles de usuario o contraseña no existen en el formulario');
    }
  });

  it('Debería mostrar un mensaje de error al ingresar credenciales incorrectas', () => {
    const credencialesIncorrectas = {
      usuario: 'usuarioIncorrecto',
      contraseña: 'contraseñaIncorrecta'
    };
    component.formularioLogin.patchValue(credencialesIncorrectas);
    component.irAInicio();
    expect(component.errorMessageu).toEqual('Datos ingresados incorrectos. Por favor, inténtelo de nuevo.');
  });
});
