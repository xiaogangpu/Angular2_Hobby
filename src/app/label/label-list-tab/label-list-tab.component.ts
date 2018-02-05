import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { Observable} from 'rxjs/observable'; 

import{ LabelListTabService} from './services/label-list-tab.service';
import { query } from '@angular/animations/src/animation_metadata';

@Component({
  selector: 'app-label-list-tab',
  templateUrl: './label-list-tab.component.html',
  styleUrls: ['./label-list-tab.component.css']
})
export class LabelListTabComponent implements OnInit {
  // 无限滚动插件配置参数
  public throttle = 600;    
  public scrollDistance = 3;

  public labelId = 0;
  public labelData = {};
  public currentTab: number = 0;
  public tabData0 = [];
  public tabData1 = [];
  public tabData2 = [];
  public tabArr = [this.tabData0,this.tabData1,this.tabData2]; // 不同的tab存储不同的数组

  constructor(
    public activated: ActivatedRoute,
    public labelTab:LabelListTabService
  ) { }

  ngOnInit() {
    this.activated.params.subscribe(params=>{
      this.labelId = params["labelId"];
      this.loadListData(this.labelId,this.currentTab);
    });
  }

  /**
   * 通过服务获取数据
   * @param labelId 专题分类id
   * @param currentTab 当前tab区域
   */
  public loadListData(labelId: number,currentTab: number) {
    this.labelTab.getData(labelId,currentTab).subscribe(
      res=>{
        let arr = res['items'];
        this.getDataArr(arr);
        if(this.labelData){
          this.labelData = res['label'];
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
    this.loadListData(this.labelId,this.currentTab);
  }
    
  /**
   * 作为无限滚动下滑事件处理器
   * @param ev 
   */
  onScrollDown(ev) {
    // console.log(`scrolled down, from ${this.className} ${this.info}`);
    this.loadListData(this.labelId,this.currentTab);
  }

}
