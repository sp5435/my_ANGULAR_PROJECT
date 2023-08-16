import { Component } from '@angular/core';
import {  FormBuilder, FormGroup,Validators, } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonApiCallService } from 'src/app/common/common-api-call.service';
import { commonService } from 'src/app/common/common.service';


@Component({
  selector: 'app-newhotel-registration',
  templateUrl: './newhotel-registration.component.html',
  styleUrls: ['./newhotel-registration.component.scss']
})
export class NewhotelRegistrationComponent {
   
  hotelRagistrationForm!:FormGroup;
  editId!:number;
  databyId:any;
  constructor(private formBulider:FormBuilder,private router:Router,private commonApiCallService:CommonApiCallService,private commonService:commonService){}

  ngOnInit(){
    this.editId = this.commonService.id;
    this.databyId = this.commonService.dataById;
    this.myOwnerRagistration();
    }

  
  myOwnerRagistration(){
    this.hotelRagistrationForm = this.formBulider.group({
      ownerName: [this.databyId ? this.databyId.ownerName : '', [Validators.required, Validators.minLength(5), Validators.pattern('[A-za-z ]*$')]],
      ownerContact: [this.databyId ? this.databyId.ownerContact : '', [Validators.required, Validators.pattern('[0-9]*$')]],
      hotelName: [this.databyId ? this.databyId.hotelName : '', [Validators.required, Validators.minLength(5), Validators.pattern('[a-zA-z0-9/$@ ]*$')]],
      hotelAddress: [this.databyId ? this.databyId.hotelAddress : '', [Validators.required, Validators.minLength(5), Validators.pattern('[a-zA-z0-9 ]*$')]],
      hotelContact: [this.databyId ? this.databyId.hotelContact : '', [Validators.required, Validators.pattern('[0-9]*$')]],
      hotelMenu: [this.databyId ? this.databyId.hotelMenu : '', [Validators.required, Validators.minLength(2)]],
      roomsAvailable: [this.databyId ? this.databyId.roomsAvailable : '', [Validators.required, Validators.pattern('[0-9]*$')]],
      userPass: [this.databyId ? this.databyId.password : '', [Validators.required,]],
    })
  }

  back(){
    this.router.navigateByUrl('Owner/ownerHome')
  }
  submitDetails(){
    let endpoint='hotelDetails';
    console.log('form data',this.hotelRagistrationForm.value);
    
    let request={
      ownerName:this.hotelRagistrationForm.value.ownerName,
      ownerContact:this.hotelRagistrationForm.value.ownerContact,
      hotelName:this.hotelRagistrationForm.value.hotelName,
      hotelAddress:this.hotelRagistrationForm.value.hotelAddress,
      hotelContact:this.hotelRagistrationForm.value.hotelContact,
      hotelMenu:this.hotelRagistrationForm.value.hotelMenu,
      roomsAvailable:this.hotelRagistrationForm.value.roomsAvailable,
      ownerCheck:this.hotelRagistrationForm.value.ownerCheck,
      password:this.hotelRagistrationForm.value.userPass,
    }
    if(this.editId){
      this.commonApiCallService.patchApiCall(endpoint, request,this.editId).subscribe((resp: any) => {
        console.log(resp);
      })
    }
    else{
      this.commonApiCallService.postApiCall(endpoint, request).subscribe((resp: any) => {
        console.log(resp);
      })
    }

    this.router.navigateByUrl('owner/ownerSuccess');
  }


  ngOnDestroy(){
    this.commonService.dataById = {};
    this.commonService.id = '';
  }


}
