import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Bulbs1Component } from './bulbs1/bulbs1.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [Bulbs1Component],
  exports:[Bulbs1Component]
})
export class Module2Module { }
