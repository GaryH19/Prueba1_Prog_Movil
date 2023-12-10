import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Component } from '@angular/core';
import { LoginGuard } from './login.guard';
import { LoginService } from './login/login.service';
import { of } from 'rxjs';

@Component({ template: '' })
class DummyLoginComponent {}

describe('LoginGuard', () => {
  let guard: LoginGuard;
  let loginService: LoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          { path: 'login', component: DummyLoginComponent }
        ])
      ],
      providers: [LoginService, LoginGuard]
    });
    guard = TestBed.inject(LoginGuard);
    loginService = TestBed.inject(LoginService);
  });

  it('Debería ser creado', () => {
    expect(guard).toBeTruthy();
  });

  it('Debería permitir la activación si el usuario está logueado', fakeAsync(() => {
    loginService.setIsLogged(true);
    const canActivate = guard.canActivate();
    canActivate.subscribe((result: boolean) => {
      expect(result).toBe(true);
    });

    tick();
  }));

  it('No debería permitir la activación si el usuario no esta logueado', fakeAsync(() => {
    loginService.setIsLogged(false);
    const canActivate = guard.canActivate();
    canActivate.subscribe((result: boolean) => {
      expect(result).toBe(false);
    });

    tick();
  }));
});
