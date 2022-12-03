import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DobPageComponent } from './dob-page.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {DobPageModalModule} from "./dob-page-modal/dob-page-modal.module";
import {MatDialogModule} from "@angular/material/dialog";



@NgModule({
    declarations: [
        DobPageComponent
    ],
    exports: [
        DobPageComponent
    ],
  imports: [
    CommonModule,
    NgbModule,
    MatDialogModule,
    DobPageModalModule
  ]
})
export class DobPageModule { }
