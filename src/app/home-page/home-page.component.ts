import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  private static URL ="https://d11am8ji68y4wp.cloudfront.net/Desktop_WebP/Bottle_Animation_WEB_1080_";

  public webURL = "";
  public yPrev: number;

  public animate: boolean = true;

  constructor() { }

  ngOnInit(): void {
    this.yPrev = 0;
    this.preLoadContent();
    this.updateBGContent();
  }

  preLoadContent() {
    this.range(10, 290, 5).forEach((i: number) => {
      const imageURL = HomePageComponent.URL + HomePageComponent.addLeadingZeros(i) + '.webp';

      const img = new Image();
      img.src = imageURL;
    });
  }

  range(start: number, end: number, step: number): number[] {
    return Array.from(Array(Math.round((end - start + 1) / 5)).keys()).map(x => x * step + start);
  }

  @HostListener("window:scroll", ['$event'])
  private updateBGContent() {
    if (!this.animate) {
      return;
    }
    const y = window.scrollY;
    // Change the background image
    this.range(Math.min(this.yPrev, y), Math.max(this.yPrev, y), 5).forEach((i: number) => {
      const label = Math.max(Math.min(Math.floor(i/24) + 1, 290) - 15, 0);
      const imageURL = HomePageComponent.URL + HomePageComponent.addLeadingZeros(label) + '.webp';
      this.setBGContent(imageURL);
    })
    const label = Math.max(Math.min(Math.floor(y/24) + 1, 290) - 15, 0);
    const imageURL = HomePageComponent.URL + HomePageComponent.addLeadingZeros(label) + '.webp';

    this.setBGContent(imageURL);
    /*const img = new Image();
    img.onload = () => this.setBGContent(imageURL);
    img.src = imageURL;
    this.yPrev = y;*/
  }

  private setBGContent(url: string) {
    this.webURL = url;
    console.log(url);
  }

  private static addLeadingZeros(num: number, totalLength: number=4): string {
    return String(num).padStart(totalLength, '0');
  }
}
