
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { CommonApiCallService } from 'src/app/common/common-api-call.service';
import { commonService } from 'src/app/common/common.service';

@Component({
  selector: 'app-ownersuccess',
  templateUrl: './ownersuccess.component.html',
  styleUrls: ['./ownersuccess.component.scss']
})
export class OwnersuccessComponent {
  hotelDetails: any;
  userName!: string;
  userHotelDetails: any[] = []
  showTable: any;
  dataById:any;

  constructor(private router: Router, private commonApiCallService: CommonApiCallService,
    private commonService: commonService) { }

  ngOnInit() {
    console.log('oninit calling...');
    this.userName = this.commonService.username;
  }

  hotelRegistration() {
    this.router.navigateByUrl('Owner/newhotelRegistration')
  }

  async myHotelDetails() {
    this.showTable = !this.showTable;
    let endPoint = 'hotelDetails';
    // this.commonApiCallService.getApiCall(endPoint).subscribe(data=>{
    //   this.hotelDetails = data;
    // })
    this.hotelDetails = await this.commonApiCallService.getApiCall(endPoint).toPromise()
    console.log('hotelDetails', this.hotelDetails);
    this.userHotelDetails = []
    if (this.hotelDetails) {
      this.hotelDetailsByOwner();
      if (this.userHotelDetails.length > 0) {

      }
      else {
        this.commonService.warningToaster('no any hotel avaible', 'Warning', {
          timeOut: 10000,
          positionClass: 'toast-top-center'
        })
      }
    } else {
      alert('no owenr data avaible')
    }
  }

  hotelDetailsByOwner() {
    this.hotelDetails.forEach((element: any) => {
      if (element.ownerName === this.userName) {
        this.userHotelDetails.push(element);
      }
    })
  }

  async delete(id: number) {
    
    await this.commonApiCallService.deleteApiCall('hotelDetails', id).toPromise()
    this.showTable = !this.showTable;
    this.myHotelDetails();
  }
  
    async edit(id:number){
      this.commonService.id = id;
      this.dataById = await this.commonApiCallService.getApiCall('hotelDetails', id).toPromise();
      this.commonService.dataById = this.dataById;
      this.router.navigateByUrl('Owner/newhotelRegistration')
    }
}

