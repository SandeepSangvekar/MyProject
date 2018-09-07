import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bulbs1',
  templateUrl: './bulbs1.component.html',
  styleUrls: ['./bulbs1.component.css']
})
export class Bulbs1Component implements OnInit {
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
