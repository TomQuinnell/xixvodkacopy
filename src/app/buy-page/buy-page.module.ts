import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyPageComponent } from './buy-page.component';
import {HeaderModule} from "../header/header.module";
import {BuyModule} from "../buy/buy.module";



@NgModule({
  declarations: [
    BuyPageComponent
  ],
    imports: [
        CommonModule,
        HeaderModule,
        BuyModule
    ]
})
export class BuyPageModule { }
