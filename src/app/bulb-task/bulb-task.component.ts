import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bulb-task',
  templateUrl: './bulb-task.component.html',
  styleUrls: ['./bulb-task.component.css']
})
export class BulbTaskComponent{
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
 

}
