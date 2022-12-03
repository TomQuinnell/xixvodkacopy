import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DobPageModule} from "./dob-page/dob-page.module";
import {AppRoutingModule} from "./app-routing.module";
import {BuyPageModule} from "./buy-page/buy-page.module";
import {HomePageModule} from "./home-page/home-page.module";
import {PoliciesTcsModule} from "./policies-tcs/policies-tcs.module";
import {AuthModule} from "./auth/auth.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DobPageModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    BuyPageModule,
    HomePageModule,
    PoliciesTcsModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
