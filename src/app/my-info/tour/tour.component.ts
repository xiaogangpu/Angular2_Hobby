import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { Observable} from 'rxjs/Rx';

import { Tour} from '../model/tour-model';
import { TourService} from './service/tour.service';

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.css']
})
export class TourComponent implements OnInit {
  public tourList: Array<Tour>;
  public totalData: string;

  constructor(
    public tourService: TourService,
    public activated: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit() {
    this.activated.params.subscribe(params=>{
      this.loadData(params["page"]);
    });
  }

  public loadData(page: number){
    this.tourService.getTour(page).subscribe(
      (res: Response)=>{
        //this.totalData = res['total'];     // 这个没有为p-dataGrid组件传递总数据，跟后台对接应该对组件传参totalRecords
        this.tourList = res['items'];
      },
      error=>{},
      ()=>{}
    );
  }

}
