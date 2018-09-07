import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { F1c1Component } from './f1c1/f1c1.component';
import { F1c2Component } from './f1c2/f1c2.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // { path: '', redirectTo: '/contacts', pathMatch: 'full' }, 
 
 {
   path: 'feature1', 
   children: [
    { path: '', component: F1c1Component },
    { path: 'f1c1', component: F1c1Component },
    { path: 'f1c2', component: F1c2Component }
   ]
 }
  
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: []
})
export class F1routingModule { }
