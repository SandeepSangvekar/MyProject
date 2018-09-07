import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class CalculatorService {

  constructor() { }

  add(a,b){
    return a+b;
  }
}
