import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoliciesTcsComponent } from './policies-tcs.component';
import {HeaderModule} from "../header/header.module";



@NgModule({
  declarations: [
    PoliciesTcsComponent
  ],
    imports: [
        CommonModule,
        HeaderModule
    ]
})
export class PoliciesTcsModule { }
