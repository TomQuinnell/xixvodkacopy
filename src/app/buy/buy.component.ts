import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {

  public numSelected: number;
  private minSelected = 1;
  private maxSelected = 10;

  constructor() { }

  ngOnInit(): void {
    this.numSelected = 1;
  }

  dec() {
    if(this.numSelected > this.minSelected) {
      this.numSelected--;
    }
  }

  inc() {
    if(this.numSelected < this.maxSelected) {
      this.numSelected++;
    }
  }

}
