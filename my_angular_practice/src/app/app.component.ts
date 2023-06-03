import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ANGULAR_PROJECT';
 //propertyName :datatype = value/data;
 //testcase1  
  firstName : string = 'sourabh';  

  //testcase 2
  firstName1 = 'sourabh';
  firstName2! : string  ;
  surName2 : any;
  surName : any = true;
  formTitle : string = 'Login Form...';
  studentName = 'sourabh';
  amount = '5600';
  isFavCity = false;
  myName = "Om";
  gender = false;
  isDisabled = true;
  eventBindingData = 60000;
  twoWayBindingTest = 96565;

   testingInterpolation( x : number, y : number ){
  
      return x + y;
  }

  testingEventBinding(){
    this.eventBindingData = 50000;
    console.log(this.eventBindingData);
    
  }
  test(){
    console.log(this.twoWayBindingTest);
  }
}





  
  

// data binding in angular
//tow categouries
//1. one way data binding: 
// I. string interpolation{{}} data transfar karna ya baind karna
// II. property binding :[]
// Iv. event binding :()
//2. two way data binding:[()]