import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { Compo1Component } from '../compo1/compo1.component';
import { Compo2Component } from 'src/app/compo2/compo2.component';
import { ErrorComponent } from '../error/error.component';


const routes: Routes = [
  { path: '', component: Compo1Component,pathMatch:"full"},
  { path: 'compo1', component: Compo1Component},
  { path: 'compo2', component: Compo2Component},
  { path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [
    CommonModule, 
    RouterModule.forRoot(routes)
  ],
  exports : [RouterModule],
  declarations: []
})
export class RoutingModule { }
