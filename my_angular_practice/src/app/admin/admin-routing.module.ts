import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminsignupComponent } from './adminsignup/adminsignup.component';

const routes: Routes = [
  {path : 'adminLogin',component : AdminLoginComponent},
  {path : 'adminsignup',component : AdminsignupComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
