import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyComponent } from './buy.component';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";



@NgModule({
  declarations: [
    BuyComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    BuyComponent
  ]
})
export class BuyModule { }
