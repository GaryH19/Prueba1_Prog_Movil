import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioPageRoutingModule } from './inicio-routing.module';

import { InicioPage } from './inicio.page';
import { HeaderModule } from '../header/header.module';
import { LoginGuard } from '../login.guard';
import { StateService } from '../state/state.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioPageRoutingModule,
    HeaderModule,
    ReactiveFormsModule,
    HttpClientModule 
  ],
  declarations: [InicioPage],
})
export class InicioPageModule {}
