import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import {TourDetailService} from './services/tour-detail.service';
import {Tour} from '../../model/tour-model';

@Component({
  selector: 'app-tour-detail',
  templateUrl: './tour-detail.component.html',
  styleUrls: ['./tour-detail.component.css']
})
export class TourDetailComponent implements OnInit {
  public detail =new Tour();

  constructor(
    public activated: ActivatedRoute,
    public tourDetailService: TourDetailService
  ) { }

  ngOnInit() {
    this.activated.params.subscribe(params=>{
      this.loadData(params['tourId']);
    });
  }

  public loadData(detailId: number) {
    this.tourDetailService.getTourDetail(detailId).subscribe(
      data=>this.detail = data,
      error=>{},
      ()=>{}
    );
  }
}
