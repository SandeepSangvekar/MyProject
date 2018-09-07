import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-m1',
  templateUrl: './m1.component.html',
  styleUrls: ['./m1.component.css']
})
export class M1Component implements OnInit {
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

  /*-- bulb task --*/
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

  constructor() { }

  ngOnInit() {
  }

}
