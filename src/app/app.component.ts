import { Component } from '@angular/core';
import { CalculatorService } from './calculator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  resultnew =0;
  constructor(private mycalculator: CalculatorService){
    this.resultnew = this.mycalculator.add(2,3);
  }  
  title : string = 'Angular Project';
  photo : string = '../assets/user-icon.png';
  name : string = 'Sandeep Bharat Sangvekar';
  age : number = 25;
  address : string = 'C-201, Laxmi Sparsh, Kondhave dhavade, NDA Road, Sr. No - 4/4, Pune - 411023.';
  styleOfId: string = 'idStyle';

  /*-- Property Binding --*/
  //status : boolean = true;

  counter : number = 0;

  increasevalue() {
    this.counter ++;
  }

  decreasvalue(){
    this.counter --;
  }
  
   path : string = "../assets/pic_bulboff.gif";
   status = "On";

  change(){
    
    //this.status = "Off";

    if(this.path == "../assets/pic_bulboff.gif" ){
      this.path = "../assets/pic_bulbon.gif";
      this.status = "Off";
    }
    else{
      this.path = "../assets/pic_bulboff.gif";
      this.status = "On";
    }
  }

  /*-- Calculator --*/
  public num1 : number;
  public num2 : number;
  public result : number;

  cal_add(){
    this.result = this.num1 + this.num2;
  }
  cal_sub(){
    this.result = this.num1 - this.num2;
  }
  cal_multi(){
    this.result = this.num1 * this.num2;
  }
  cal_div(){
    this.result = this.num1 / this.num2;
  }

  /*-- Multi bulbs on/off --*/
  // imgPath = "../assets/pic_bulboff.gif";
  bulb = [
    
      {btnStatus:'ON', imgPath:'../assets/pic_bulboff.gif'},
      {btnStatus:'ON', imgPath:'../assets/pic_bulboff.gif'},
      {btnStatus:'ON', imgPath:'../assets/pic_bulboff.gif'},
      {btnStatus:'ON', imgPath:'../assets/pic_bulboff.gif'},
      {btnStatus:'ON', imgPath:'../assets/pic_bulboff.gif'}
      
    
  ];


  change1(color){
   
    if(color.btnStatus == 'ON'){
      color.imgPath = './assets/pic_bulbon.gif';
      color.btnStatus = "OFF";
   
    } else {
      color.imgPath = './assets/pic_bulboff.gif';
      color.btnStatus = "ON";
     
    }
  }

}

