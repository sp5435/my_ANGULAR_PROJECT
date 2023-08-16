import { Component } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


import { CommonApiCallService } from 'src/app/common/common-api-call.service';
import { commonService } from 'src/app/common/common.service';

@Component({
  selector: 'app-ownerhome',
  templateUrl: './ownerhome.component.html',
  styleUrls: ['./ownerhome.component.scss']
})
export class OwnerhomeComponent {
  loginForm!: FormGroup;
  endPoint!: string;
  ownerData: any;
  validUser: boolean = false;
  forgetPasswordForm!: FormGroup;
  showForgetPasswordForm: boolean = false;
  forgotPassword: boolean = false;
  userName!: string;
  constructor(private router: Router,
    private fb: FormBuilder,
    private commonApiCallService: CommonApiCallService,
    private commonService: commonService) {

  }

  ngOnInit() {
    this.endPoint = this.commonService.journey;
    this.forgotPassword = this.commonService.forgotPassword;
    this.userName = this.commonService.username;
    console.log('endPoint...', this.endPoint);
    this.loginFormDetails();
    this.getOwnerApiData();
  }

  loginFormDetails() {
    this.loginForm = this.fb.group({
      userName: [],
      password: []
    })
  }
  forgoPasswordFormDetails() {
    this.forgetPasswordForm = this.fb.group({
      newPassword: [],
      confirmPassword: []
    })
  }

  login() {
    console.log(this.loginForm.value);
    if (this.loginForm.value.userName) {
      this.commonService.username = this.loginForm.value.userName;
    }

    if (this.ownerData) {
      this.ownerData.find((ownerData: any) => {
        if (ownerData.UserName === this.loginForm.value.userName && ownerData.Password === this.loginForm.value.password) {
          this.validUser = true
        }
      });

      if (this.validUser) {
        this.router.navigateByUrl('Owner/ownerSuccess');
      }
      else {
       // alert('username or password is incorrect');
       this.commonService.warningToaster('Password is incorrect','Warning',
       {
        timeOut: 10000,
        positionClass: 'toast-top-center'
       })

        this.commonService.forgotPassword = true;
        this.router.navigateByUrl('Owner/ownerHome');
      }
    }
  }
  back() {
    this.router.navigateByUrl('home')
  }

  async getOwnerApiData() {
    // this.commonApiCallService.getApiCall(this.endPoint).subscribe(getOwnerResponse=>{
    //   this.ownerData = getOwnerResponse;
    // })
    this.ownerData = await this.commonApiCallService.getApiCall(this.endPoint).toPromise()
    console.log('this.ownerData', this.ownerData);


  }

  // isValidUser(){
  //   this.ownerData.forEach((ownerData:any)=>{
  //     if(ownerData.UserName === this.loginForm.value.userName && ownerData.Password === this.loginForm.value.password) {
  //       this.validUser = true;
  //     }     
  //   });
  // }

  forgetPassword() {
    this.showForgetPasswordForm = !this.showForgetPasswordForm;
    this.forgoPasswordFormDetails();
  }

  submit() {
    this.updatePassword();
    this.showForgetPasswordForm = !this.showForgetPasswordForm;
    this.forgotPassword = false;
  }

  async updatePassword() {
    var user: any;
    this.ownerData.forEach((data: any) => {
      if (data.UserName === this.userName) {
        user = data;
      }
    })
    if (user) {
      let request = {
        Password: this.forgetPasswordForm.value.newPassword
      }
      // this.commonApiCallService.patchApiCall(this.endPoint,request,user.id ).subscribe((respo:any)=>{
      //   console.log(respo);
      // })
      await this.commonApiCallService.patchApiCall(this.endPoint, request, user.id).toPromise()
   
    }
    else{
      alert('user is not exist')
    }
  }
}



 
  













































































































































































    // ngOnInit(){
    //   this.endpoint =this.commonservice.journey;
    //   this.forgotPassword = this.commonService.forgotPassword;
    //   this.userName = this.commonService.userName;
    //   console.log('endpoint....',this.endpoint);
      
    //   this.loginformDetails();
    //   this.getOwnerApiData();
    // }
    // loginformDetails(){
    //    this.loginForm = this.fb.group({
    //     userName:[],
    //       password:[]
    //    })
    // }
    // login() {
    //   console.log(this.loginForm.value);
    //   if(this.loginForm.value.userName ){
    //      this.commonservice.userName = this.loginForm.value.userName ;
    //   }
    //   this.getOwnerApiData();
    //   console.log('this.ownerData', this.ownerdata);
    
    //   if (this.ownerdata) {
    //     this.isvaliduser();
    //     if (this.validuser) {
    //       this.router.navigateByUrl('Owner/ownerHome');
    //     }
    //     else {
    //       this.router.navigateByUrl('Owner/ownerSuccess');
    //     }
    //   }
    // }
    //   back(){
    //     this.router.navigateByUrl('home')
    //   }
    
    //   getOwnerApiData(){
    //     this.CommonApiCallService.getApiCall(this.endpoint).subscribe(getOwnerResponse=>{
    //       this.ownerdata = getOwnerResponse;
    //     })
        
        
    
    //   }
    //   isvaliduser(){
        
    //     this.ownerdata.forEach((element:any)=>{
    //      if( element.userName === this.loginForm.value.userName && element.Password === this.loginForm.value.password){
    //       this.validuser =true;
    //      }
    //     });
    //     return
    //   }
      
    //   forgetPassword() {
    //     this.showForgetPasswordForm = !this.showForgetPasswordForm;
    //     this.forgoPasswordFormDetails();
    //   }
    //   forgoPasswordFormDetails() {
    //     throw new Error('Method not implemented.');
    //   }
    
    //   submit() {
    //     this.updatePassword();
    //     this.showForgetPasswordForm = !this.showForgetPasswordForm;
    //     this.commonservice.forgotPassword =false;
    //   }
    
    //   async updatePassword() {
    //     var user: any;
    //     this.ownerdata.forEach((data: any) => {
    //       if (data.UserName === this.userName) {
    //         user = data;
    //       }
    //     })
    //     if (user) {
    //       let request = {
    //         Password: this.forgetPasswordForm.value.newPassword
    //       }
    //       // this.commonApiCallService.patchApiCall(this.endPoint,request,user.id ).subscribe((respo:any)=>{
    //       //   console.log(respo);
    //       // })
    //       await this.CommonApiCallService.patchApiCall(this.endpoint, request, user.id).toPromise()
       
    //     }
    //   }
    // }
    