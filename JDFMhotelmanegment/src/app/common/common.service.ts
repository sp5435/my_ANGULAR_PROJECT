import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class commonService {



  journey!:string
  
  
  forgotPassword!: boolean;
  
  id!: any;
  username: any;
  dataById:any;

  constructor(private toastrService:ToastrService) { }

  whiteSpaceValidator(nameFieldValue:any){
    let data = nameFieldValue.value;
    let newdata = data?.trim();
    let isNotValid = data.length != newdata.length ;
    return isNotValid ? {whiteSpace:true} : null
  }

  warningToaster( msg:any, title:any, configuration:any ){
    this.toastrService.warning( msg, title, configuration)
}

}
