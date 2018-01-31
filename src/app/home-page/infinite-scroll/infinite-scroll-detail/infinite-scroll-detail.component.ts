import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import { InfiniteScrollDetailService} from './service/infinite-scroll-detail.service';
import { Tour} from '../../model/tour-model';

@Component({
  selector: 'app-infinite-scroll-detail',
  templateUrl: './infinite-scroll-detail.component.html',
  styleUrls: ['./infinite-scroll-detail.component.css']
})
export class InfiniteScrollDetailComponent implements OnInit {

  public detail =new Tour();

  constructor(
    public activated: ActivatedRoute,
    public  InfiniteScrollService: InfiniteScrollDetailService
  ) { }

  ngOnInit() {
    this.activated.params.subscribe(params=>{
      this.loadData(params['tourId']);
    });
  }

  public loadData(detailId: number) {
    this.InfiniteScrollService.getInfiniteDetail(detailId).subscribe(
      data=>this.detail = data,
      error=>{},
      ()=>{}
    );
  }
}