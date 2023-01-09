import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateHome(): void {
    this.navigate("");
  }

  navigateBuy(): void {
    this.navigate("buy");
  }

  navigateTCs(): void {
    this.navigate("tcs");
  }

  private navigate(url: string): void {
    this.router.navigateByUrl(url).then();
  }
}
