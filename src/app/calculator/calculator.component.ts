import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

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
