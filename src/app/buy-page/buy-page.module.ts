import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyPageComponent } from './buy-page.component';
import {HeaderModule} from "../header/header.module";



@NgModule({
  declarations: [
    BuyPageComponent
  ],
    imports: [
        CommonModule,
        HeaderModule
    ]
})
export class BuyPageModule { }
