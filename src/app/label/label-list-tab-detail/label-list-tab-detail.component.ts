import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import { LabelListTabDetailService} from './services/label-list-tab-detail.service';

import { article} from '../model/articel.model';

@Component({
  selector: 'app-label-list-tab-detail',
  templateUrl: './label-list-tab-detail.component.html',
  styleUrls: ['./label-list-tab-detail.component.css']
})
export class LabelListTabDetailComponent implements OnInit {
  public detail = {};

  constructor(
    public activated: ActivatedRoute,
    public labelListTabDetailService: LabelListTabDetailService
  ) { }

  ngOnInit() {
    this.activated.params.subscribe(params=>{
      this.loadData(params['numId']);
    });
  }

  public loadData(detailId: number) {
    this.labelListTabDetailService.getLabelListTabDetail(detailId).subscribe(
      data=>{
        this.detail = data;
      },
      error=>{},
      ()=>{}
    );
  }

}
