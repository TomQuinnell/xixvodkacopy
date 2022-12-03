import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DobPageModalComponent } from './dob-page-modal.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DirectivesModule} from "../../Directives/directives.module";
import {NgSelectModule} from '@ng-select/ng-select';

@NgModule({
    declarations: [
      DobPageModalComponent
    ],
    exports: [
      DobPageModalComponent
    ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DirectivesModule,
    NgSelectModule
  ]
})
export class DobPageModalModule { }
