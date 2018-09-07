import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { Feature1Module } from './feature1/feature1.module';
import { Feature2Module } from './feature2/feature2.module';

const routes: Routes = [
  // { path: '', redirectTo: '/contacts', pathMatch: 'full' }, 
  
  // { path: 'contacts', component: ContactsComponent },
  // { path: 'aboutus', component: AboutusComponent },
  // { path: 'feature2', loadChildren: 'app/feature2/feature2.module#Feature2Module'},
  // { path: 'feature1', loadChildren: 'app/feature1/feature1.module#Feature1Module'}
  // { path: '', component: DefaultComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    Feature1Module,
    Feature2Module
  ],
  exports : [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
