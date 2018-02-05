import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { Observable} from 'rxjs/Observable';

import { person} from '../model/person-model'; 
import { UserListServiceService} from './services/user-list-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  public dataArr:Array<person> = [];

  constructor(
    public activated: ActivatedRoute,
    public userListService: UserListServiceService
  ) { }

  ngOnInit() {
    this.loadData();
  }

  public loadData() {
    this.userListService.getData().subscribe(
      res=>{
        this.dataArr = res['items'];
      },
      error=>{},
      ()=>{}
    );
  }
    
}
