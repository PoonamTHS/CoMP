import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'dash', pathMatch: 'full' },
  { path: 'auth', loadChildren: './auth/auth.module#AuthPageModule'},
  { path: 'dash', loadChildren: './dash/dash.module#DashPageModule' , canLoad: [AuthGuard]},
  { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule' , canLoad: [AuthGuard] },
  { path: 'home', loadChildren: './dash/home/home.module#HomePageModule' , canLoad: [AuthGuard]},
 // { path: 'reg.mhw', loadChildren: './reg.mhw/reg.mhw.module#Reg.MhwPageModule' },
  // { path: 'reg.family', loadChildren: './reg.family/reg.family.module#RegFamilyPageModule' },
  { path: 'regfamily', loadChildren: './regfamily/regfamily.module#RegfamilyPageModule' },
  { path: 'reg-family-member', loadChildren: './reg-family-member/reg-family-member.module#RegFamilyMemberPageModule' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
