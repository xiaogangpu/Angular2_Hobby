import { Component, OnInit } from '@angular/core';

import { ListService } from './services/list.service';
@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.component.html',
  styleUrls: ['./infinite-scroll.component.css']
})
export class InfiniteScrollComponent implements OnInit {
  public scrollWindow = false;
  public selector = ".main-panel";
  public fromRoot = false;
  public throttle = 20;
  public disableScroll = false;
  public array = this.listMaker.dataArr;
  public scrollDistance = 3;
  public scrollUpDistance = 2;  

  // <div class="results {{className}}"
  //   [scrollWindow]="scrollWindow"
  //   data-infinite-scroll
  //   [infiniteScrollContainer]="selector"
  //   [fromRoot]="fromRoot"
  //   [infiniteScrollDisabled]="disableScroll"
  //   [infiniteScrollDistance]="scrollDistance"
  //   [infiniteScrollUpDistance]="scrollUpDistance"
  //   [infiniteScrollThrottle]="throttle"
  //   (scrolled)="onScrollDown()"
  //   (scrolledUp)="onUp()">
  //     <p *ngFor="let i of array">
  //     </p>

  constructor(public listMaker: ListService) { }

  ngOnInit() {
  }

  onScrollDown(ev) {
    // console.log(`scrolled down, from ${this.className} ${this.info}`);
    this.listMaker.setDirectionDown();
  }

  onUp(ev) {
    // this.listMaker.setDirectionUp();
  }

}
