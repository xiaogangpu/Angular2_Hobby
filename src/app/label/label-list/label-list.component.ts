import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { Observable} from 'rxjs/Observable';

import { label} from '../model/label-model'; 
import { LabelListService} from './services/label-list.service';

@Component({
  selector: 'app-label-list',
  templateUrl: './label-list.component.html',
  styleUrls: ['./label-list.component.css']
})
export class LabelListComponent implements OnInit {
  public dataArr:Array<label> = [];

  constructor(
    public activated: ActivatedRoute,
    public labelListService: LabelListService
  ) { }

  ngOnInit() {
    this.loadData();
  }

  public loadData() {
    this.labelListService.getData().subscribe(
      res=>{
        this.dataArr = res['items'];
      },
      error=>{},
      ()=>{}
    );
  }

}
