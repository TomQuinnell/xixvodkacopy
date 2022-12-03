import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaxLengthDirective} from "./max-length-directive";



@NgModule({
  declarations: [MaxLengthDirective],
  imports: [
    CommonModule
  ],
  exports: [
    MaxLengthDirective
  ]
})
export class DirectivesModule { }
