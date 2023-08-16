import { Component } from '@angular/core';
import { FormBuilder, FormGroup,Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonApiCallService } from 'src/app/common/common-api-call.service';
import { commonService } from 'src/app/common/common.service';

@Component({
  selector: 'app-ownersignup',
  templateUrl: './ownersignup.component.html',
  styleUrls: ['./ownersignup.component.scss']
})
export class OwnersignupComponent {
  signupform!:FormGroup;
  journey!:string;
  postResponse:any;
  

  
  constructor(private fb:FormBuilder,
    private commonService: commonService,
    private apiCallService: CommonApiCallService,
    private router : Router){}
  
 
    ngOnInit(){
      this.journey = this.commonService.journey;
      console.log('this.journey',this.journey);
      
       this.formDetails();
      }
  formDetails() {
    this.signupform = this.fb.group({
      name:['',[Validators.required,Validators.minLength(7)]],
      email:['',[]],
      mobile:['',[]],
      password:['',[]],
      gender:['',[]],
      

    })
  }
  submit(){
    let request = {
      UserName : this.signupform.value. name,
      Email:   this.signupform.value. email,
      Mobile :  this.signupform.value.mobile,
      Password :  this.signupform.value.password,
      Gender :  this.signupform.value.gender,
    }
    this.apiCallService.postApiCall(this.journey,request).subscribe(resp=>{
      console.log(resp);
      this.postResponse = resp;
    })
      
  
    // if(this.postResponse?.id){
     this.router.navigateByUrl('Owner/ownerSuccess');
     //}

}
back(){this.router.navigateByUrl('Owner/ownerHome')
}
}
