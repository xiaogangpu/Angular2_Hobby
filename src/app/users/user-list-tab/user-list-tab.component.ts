import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { Observable} from 'rxjs/observable'; 

import{ UserListTabService} from './services/user-list-tab.service';
import { query } from '@angular/animations/src/animation_metadata';

@Component({
  selector: 'app-user-list-tab',
  templateUrl: './user-list-tab.component.html',
  styleUrls: ['./user-list-tab.component.css']
})
export class UserListTabComponent implements OnInit {
  // 无限滚动插件配置参数
  public throttle = 600;    
  public scrollDistance = 3;

  public userId = 0;
  public personData = {};
  public currentTab: number = 0;
  public tabData0 = [];
  public tabData1 = [];
  public tabData2 = [];
  public tabArr = [this.tabData0,this.tabData1,this.tabData2]; // 不同的tab存储不同的数组

  constructor(
    public activated: ActivatedRoute,
    public userTab:UserListTabService
  ) { }

  ngOnInit() {
    this.activated.params.subscribe(params=>{
      this.userId = params["userId"];
      this.loadListData(this.userId,this.currentTab);
    });
  }

  /**
   * 通过服务获取数据
   * @param userId 用户id
   * @param currentTab 当前tab区域
   */
  public loadListData(userId: number,currentTab: number) {
    this.userTab.getData(userId,currentTab).subscribe(
      res=>{
        let arr = res['items'];
        this.getDataArr(arr);
        if(this.personData){
          this.personData = res['person'];
        }
      }
    );
  }

  /**
   * 用于吧对应的tab数据添加到对应的tab数组
   * @param arr 
   */
  public getDataArr(arr){
    for(let i=0;i<arr.length;i++) {
      this.tabArr[this.currentTab].push(arr[i]);
    }
  }

  
  public onTabSelect($event) {
    this.currentTab = $event;
    this.loadListData(this.userId,this.currentTab);
  }
    
  /**
   * 作为无限滚动下滑事件处理器
   * @param ev 
   */
  onScrollDown(ev) {
    // console.log(`scrolled down, from ${this.className} ${this.info}`);
    this.loadListData(this.userId,this.currentTab);
  }

}
