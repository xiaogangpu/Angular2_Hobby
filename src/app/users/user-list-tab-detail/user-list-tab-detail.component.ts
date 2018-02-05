import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import { UserListTabDetailService} from './services/user-list-tab-detail.service';

import { article} from '../model/artible.model';

@Component({
  selector: 'app-user-list-tab-detail',
  templateUrl: './user-list-tab-detail.component.html',
  styleUrls: ['./user-list-tab-detail.component.css']
})
export class UserListTabDetailComponent implements OnInit {
  public detail = {};

  constructor(
    public activated: ActivatedRoute,
    public userListTabDetailService: UserListTabDetailService
  ) { }

  ngOnInit() {
    this.activated.params.subscribe(params=>{
      this.loadData(params['numId']);
    });
  }

  public loadData(detailId: number) {
    this.userListTabDetailService.getUserListTabDetail(detailId).subscribe(
      data=>{
        this.detail = data;
      },
      error=>{},
      ()=>{}
    );
  }

}
