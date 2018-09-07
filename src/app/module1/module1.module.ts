import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Calculator1Component } from './calculator1/calculator1.component';
import { FormsModule } from '@angular/forms';
import { IdCardComponent } from './id-card/id-card.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [Calculator1Component, IdCardComponent],
  exports: [Calculator1Component,IdCardComponent]
})
export class Module1Module { }
