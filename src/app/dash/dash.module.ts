import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { DashPage } from './dash.page' ;
import {DashRoutingModule} from './dash.routing.module' ;


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    DashRoutingModule
  ],
  declarations: [DashPage]
})
export class DashPageModule {}
