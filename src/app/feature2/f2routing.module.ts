import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { F2c1Component } from './f2c1/f2c1.component';
import { F2c2Component } from './f2c2/f2c2.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // { path: '', redirectTo: '/contacts', pathMatch: 'full' }, 
  {
    path:'feature2',
    children:[
      { path: '', component: F2c1Component },
      { path: 'f2c1', component: F2c1Component },
      { path: 'f2c2', component: F2c2Component }
    ]
  }];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: []
})
export class F2routingModule { }
