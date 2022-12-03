import { Component, OnInit } from '@angular/core';
import { DobPageModalComponent } from "./dob-page-modal/dob-page-modal.component";
import {MatDialog} from '@angular/material/dialog';
import {Router} from "@angular/router";
import {AuthService} from "../auth/auth-service";

@Component({
  selector: 'app-dob-page',
  templateUrl: './dob-page.component.html',
  styleUrls: ['./dob-page.component.css']
})
export class DobPageComponent implements OnInit {
  constructor(private dialog: MatDialog,
              private router: Router,
              private authService: AuthService){}
  openDialog() {
    this.dialog.open(DobPageModalComponent, { disableClose: true });
    this.dialog.afterAllClosed.subscribe(() => {
      this.authService.authorize();
      this.router.navigateByUrl('').then();
    })
  }

  ngOnInit(): void {
    this.openDialog();
  }
}
