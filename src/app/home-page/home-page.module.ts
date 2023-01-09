import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import {HeaderModule} from "../header/header.module";
import {BuyModule} from "../buy/buy.module";



@NgModule({
  declarations: [
    HomePageComponent
  ],
    imports: [
        CommonModule,
        HeaderModule,
        BuyModule
    ]
})
export class HomePageModule { }
