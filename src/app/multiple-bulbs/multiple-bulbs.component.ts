import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiple-bulbs',
  templateUrl: './multiple-bulbs.component.html',
  styleUrls: ['./multiple-bulbs.component.css']
})
export class MultipleBulbsComponent {
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
