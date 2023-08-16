import { Component } from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonApiCallService } from 'src/app/common/common-api-call.service';
import { commonService } from 'src/app/common/common.service';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.scss']
})
export class UserhomeComponent {
  loginForm!: FormGroup;
  endPoint!: string;
  userName: any;
  constructor(private router: Router,
    private fb: FormBuilder,
    private commonApiCallService:CommonApiCallService,
    private commonService: commonService) {

  }
  ngOnInit() {
    this.endPoint = this.commonService.journey;
  
    this.userName = this.commonService.username;
    console.log('endPoint...', this.endPoint);
    this.loginFormDetails();
    
  }
  loginFormDetails() {
    this.loginForm= this.fb.group({
      userName: [],
      password: []
    })
  }

    
  
  login(){
    console.log(this.loginForm.value);
    if (this.loginForm.value.userName) {
      this.commonService.username = this.loginForm.value.userName;
    }
    
  }
  back(){}
}


