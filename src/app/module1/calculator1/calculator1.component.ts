import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator1',
  templateUrl: './calculator1.component.html',
  styleUrls: ['./calculator1.component.css']
})
export class Calculator1Component implements OnInit {
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

  constructor() { }

  ngOnInit() {
  }

}
