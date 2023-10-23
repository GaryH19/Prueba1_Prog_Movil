import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { ListaPageRoutingModule } from './lista-routing.module';

import { ListaPage } from './lista.page';
import { DummyService } from '../services/dummy.service';
import { HeaderModule } from "../header/header.module";

@NgModule({
    declarations: [ListaPage],
    providers: [DummyService],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ListaPageRoutingModule,
        HttpClientModule,
        HeaderModule
    ]
})
export class ListaPageModule {}
