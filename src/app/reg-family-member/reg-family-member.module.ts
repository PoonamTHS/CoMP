import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RegFamilyMemberPage } from './reg-family-member.page';

const routes: Routes = [
  {
    path: '',
    component: RegFamilyMemberPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RegFamilyMemberPage]
})
export class RegFamilyMemberPageModule {}
