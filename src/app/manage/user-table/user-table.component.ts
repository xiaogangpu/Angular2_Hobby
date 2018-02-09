import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { SelectItem } from 'primeng/primeng';
import { ConfirmationService } from 'primeng/primeng';
import { MessageService } from 'primeng/components/common/messageservice';

import {UserTableService} from './services/user-table.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {
  public users = [];

  constructor(
    public router: Router,
    public activatedRoute: ActivatedRoute,
    public userService: UserTableService,
    public confirmationService: ConfirmationService,
    public messageService: MessageService
  ) { }

  ngOnInit() {
    this.loadData();
  }

  public loadData(){
    this.userService.getData().subscribe(data=>{
      this.users = data['items'];
    });
  }


/**
 * 弹出提示框确认删除
 * @param item 
 */
  public delUser(item) {
    this.confirmationService.confirm({
      message: '确定要删除吗？',
      accept: () => {
        console.log(item);
        this.messageService.add({ severity: 'success', summary: '成功', detail: '删除数据成功' });
      }
    });
  }

}
