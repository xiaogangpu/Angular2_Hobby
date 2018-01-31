import { Component, OnInit } from '@angular/core';
import { Http, Headers} from '@angular/http';
import { ActivatedRoute, Router} from '@angular/router';

import { person} from '../model/person-model';

import { UserRecommendServiceService} from './services/user-recommend-service.service';

@Component({
  selector: 'app-user-recommend',
  templateUrl: './user-recommend.component.html',
  styleUrls: ['./user-recommend.component.css']
})
export class UserRecommendComponent implements OnInit {
  public arr:Array<person> = [];
  public perPage:number = 5;

  constructor(
    public userService: UserRecommendServiceService
    ) { }

  ngOnInit() {
    this.loadData();
  }

  public loadData(){
    this.userService.getData().subscribe(
      res=>{
        let datas = res['items'];
        for(let i=0;i<this.perPage;i++) {
          this.arr.push(datas[i]);
        }
      },
      error=>{},
      ()=>{}
    );
  }

}
