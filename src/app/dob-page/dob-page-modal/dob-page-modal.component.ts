import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {FormGroup, Validators, FormBuilder} from "@angular/forms";
import * as moment from 'moment';
import {Router} from "@angular/router";

@Component({
  selector: 'app-dob-page-modal',
  templateUrl: './dob-page-modal.component.html',
  styleUrls: ['./dob-page-modal.component.css']
})
export class DobPageModalComponent implements OnInit {
  dobForm: FormGroup;
  selectedCountry: String;
  countries: String[];
  drinkingAgeMap: Map<String, number>;

  constructor(private dialogRef: MatDialogRef<DobPageModalComponent>,
              private fb: FormBuilder,
              private router: Router){
    this.dialogRef.updateSize('30%', '80%');
    this.dialogRef.disableClose = true;

    this.drinkingAgeMap = new Map();
    this.drinkingAgeMap.set("United Kingdom", 18);
    this.selectedCountry = this.drinkingAgeMap.keys().next().value;
    this.countries = Array.from(this.drinkingAgeMap.keys());

    this.dobForm = this.fb.group({
      day: ['', [Validators.required, Validators.pattern("[0-9]{1,2}"), Validators.min(0), Validators.max(31)]],
      month: ['', [Validators.required, Validators.pattern("[0-9]{1,2}"), Validators.min(0), Validators.max(12)]],
      year: ['', [Validators.required, Validators.pattern("[0-9]{1,4}"), Validators.min(1900), Validators.max(2023)]],
    });
  }

  ngOnInit() {
  }

  keyPressDate(event: any) {
    var charCode = (event.which) ? event.which : event.keyCode;
    var isNotNumber = charCode != 46 && charCode > 31
      && (charCode < 48 || charCode > 57);
    var isLong = event.target.value.length >= event.target.placeholder.length;

    if (isNotNumber || isLong) {
      event.preventDefault();
      return false;
    }
    return true;
  }

  onSubmit() {
    if (this.dobForm.valid) {
      const day: string = this.dobForm.get("day")?.value.toString();
      const month: string = this.dobForm.get("month")?.value.toString();
      const year: string = this.dobForm.get("year")?.value.toString();

      const dob = moment(day + "/" + month + "/" + year);
      const now = moment();
      let drinkingAge = this.drinkingAgeMap.get(this.selectedCountry);
      drinkingAge = drinkingAge ? drinkingAge : 18;

      const diff = moment.duration(now.diff(dob));
      if (diff.asYears() >= drinkingAge) {
        this.dialogRef.disableClose = false;
        this.dialogRef.close();
      }
    }
  }

}
