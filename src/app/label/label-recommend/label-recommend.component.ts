import { Component, OnInit } from '@angular/core';
import { Http, Headers} from '@angular/http';
import { ActivatedRoute, Router} from '@angular/router';

import { label} from '../model/label-model';

import { LabelRecommendService} from './services/label-recommend.service';

@Component({
  selector: 'app-label-recommend',
  templateUrl: './label-recommend.component.html',
  styleUrls: ['./label-recommend.component.css']
})
export class LabelRecommendComponent implements OnInit {
  public dataArr:Array<label> = [];

  constructor(
    public labelService: LabelRecommendService
    ) { }

  ngOnInit() {
    this.loadData();
  }

  public loadData(){
    this.labelService.getData().subscribe(
      res=>{
        let datas = res['items'];
        this.dataArr = datas;
      },
      error=>{},
      ()=>{}
    );
  }

}
