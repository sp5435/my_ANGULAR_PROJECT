import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserhomeComponent } from './userhome/userhome.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { SharedModule } from '../common/shared/shared.module';
import { UsersuccessComponent } from './usersuccess/usersuccess.component';


@NgModule({
  declarations: [
    UserhomeComponent,
    UserloginComponent,
    UsersuccessComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
  ]
})
export class UserModule { }
