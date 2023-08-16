import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { commonService } from '../common/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private router :Router,
    private CommonService:commonService){}


  journey(journey:string){
    if(journey === 'admin'){
    this.CommonService.journey = 'admin'
    this.router.navigateByUrl('admin')
  }
  
    else if(journey === 'owner'){
      this.CommonService.journey = 'owner'
      this.router.navigateByUrl('Owner')

  }
  else {
    this.CommonService.journey = 'user'
    this.router.navigateByUrl('user')

}
}
}
