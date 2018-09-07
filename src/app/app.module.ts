import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { C1Component } from './c1/c1.component';
import { ParentComponent } from './parent/parent.component';
import { C2Component } from './c2/c2.component';
import { BulbTaskComponent } from './bulb-task/bulb-task.component';
import { MultipleBulbsComponent } from './multiple-bulbs/multiple-bulbs.component';
import { CalculatorService } from './calculator.service';
import { MyModuleModule } from './my-module/my-module.module';
import { CalculatorComponent } from './calculator/calculator.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { M1Component } from './m1/m1.component';
import { M2Component } from './m2/m2.component';
import { Module2Module } from './module2/module2.module';
import { Module1Module } from './module1/module1.module';
import { Compo1Component } from './compo1/compo1.component';
import { Compo2Component } from './compo2/compo2.component';

import { ErrorComponent } from './error/error.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    C1Component,
    ParentComponent,
    C2Component,
    BulbTaskComponent,
    MultipleBulbsComponent,
    CalculatorComponent,
    HeaderComponent,
    FooterComponent,
    M1Component,
    M2Component,
    Compo1Component,
    Compo2Component,
    ErrorComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    MyModuleModule,
    Module2Module,
    Module1Module,
    AppRoutingModule,
    

  ],
  providers: [CalculatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
