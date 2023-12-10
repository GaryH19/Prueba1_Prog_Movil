import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConductorPageRoutingModule } from './conductor-routing.module';

import { ConductorPage } from './conductor.page';
import { HeaderModule } from "../header/header.module";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [ConductorPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ConductorPageRoutingModule,
        HeaderModule,
        HttpClientModule
    ]
})
export class ConductorPageModule {}
