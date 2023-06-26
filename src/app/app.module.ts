import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActionBarComponent } from './action-bar/action-bar.component';
import { MaxMinMeterComponent } from './max-min-meter/max-min-meter.component';
import { SqaureFlexComponent } from './sqaure-flex/sqaure-flex.component';
import { ActionBarTwoComponent } from './action-bar-two/action-bar-two.component';
import { HttpClientModule } from '@angular/common/http';
import { TestModule } from './test/test.module';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { ShoppingModule } from './shopping/shopping.module';
import { TableModule } from 'primeng/table';
import { TestSumComponent } from './test-sum/test-sum.component';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent,
    ActionBarComponent,
    MaxMinMeterComponent,
    SqaureFlexComponent,
    ActionBarTwoComponent,
    TestSumComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    TestModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    TableModule,
    ShoppingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
