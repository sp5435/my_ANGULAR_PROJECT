import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwnerhomeComponent } from './ownerhome/ownerhome.component';
import { OwnersignupComponent } from './ownersignup/ownersignup.component';
import { OwnersuccessComponent } from './ownersuccess/ownersuccess.component';
import { NewhotelRegistrationComponent } from './newhotel-registration/newhotel-registration.component';

  


const routes: Routes = [
  { path:'', component: OwnerhomeComponent},
  { path:'ownerHome', component: OwnerhomeComponent},
  { path: 'ownerSignUp', component : OwnersignupComponent},
  { path : 'ownerSuccess', component: OwnersuccessComponent},
  {path:'newhotelRegistration',component:NewhotelRegistrationComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnerRoutingModule { }
