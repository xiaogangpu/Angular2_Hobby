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
  public totalData: number;

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
        if(!this.totalData){
          this.totalData = parseInt(res['total'],10);     // 这个没有为p-dataGrid组件传递总数据，跟后台对接应该对组件传参totalRecords
        }
        this.tourList = res['items'];
      },
      error=>{},
      ()=>{}
    );
  }

  /**
   * 点击页码后计算页数然后加载数据
   * @param  
   */
  public loadCarsLazy($event) {
    let temp = $event.first / $event.rows + 1;
    this.router.navigateByUrl("/homePage/tour/"+temp);
  }

}
