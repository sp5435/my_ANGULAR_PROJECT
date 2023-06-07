import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';

import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminsignupComponent } from './adminsignup/adminsignup.component';

console.log('admin . module');



@NgModule({
  declarations: [
    
    AdminLoginComponent,
    AdminsignupComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
