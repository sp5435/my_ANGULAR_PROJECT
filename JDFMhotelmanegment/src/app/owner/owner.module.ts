import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnerRoutingModule } from './owner-routing.module';
import { OwnerhomeComponent } from './ownerhome/ownerhome.component';
import { OwnersignupComponent } from './ownersignup/ownersignup.component';

import { SharedModule } from '../common/shared/shared.module';
import { OwnersuccessComponent } from './ownersuccess/ownersuccess.component';

import { NewhotelRegistrationComponent } from './newhotel-registration/newhotel-registration.component';




@NgModule({
  declarations: [
    OwnerhomeComponent,
    OwnersignupComponent,
    OwnersuccessComponent,
  
    NewhotelRegistrationComponent
    
    
    
  ],
  imports: [
    CommonModule,
    OwnerRoutingModule,
    SharedModule,
    
  ]
})
export class OwnerModule { }
