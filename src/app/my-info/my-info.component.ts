import { Component, OnInit, ViewChild } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {Observable} from 'rxjs/Observable';

import { SwiperComponent, SwiperDirective, SwiperConfigInterface,
  SwiperScrollbarInterface, SwiperPaginationInterface,SwiperAutoplayInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-my-info',
  templateUrl: './my-info.component.html',
  styleUrls: ['./my-info.component.css']
})
export class MyInfoComponent{
  public slides = [
    {"src":"1.jpg","name":"光华"},
    {"src":"2.jpg","name":"悠悠"},
    {"src":"3.jpg","name":"平清盛"},
    {"src":"4.jpg","name":"大平"},
    {"src":"5.jpg","name":"不知火舞"}
  ];
  public instance: any;
  public type: string = 'directive';
  public show: boolean = true;
  public disabled: boolean = false;

  private autoplay: SwiperAutoplayInterface = {
    delay:2500,
    stopOnLast:true,
    disableOnInteraction:false
  }

  private scrollbar: SwiperScrollbarInterface = {
    el: '.swiper-scrollbar',
    hide: false,                                  // 用户交互后自动隐藏滚动条
    draggable: true                               // 设置为true以启用滚动条可拖动，允许您控制滑块的位置
  };

  private pagination: SwiperPaginationInterface = {
    el: '.swiper-pagination',                     // 如果为true，则点击分页按钮将导致转换到适当的幻灯片。只适用于子弹分页类型
    clickable: true,
    hideOnClick: false
  };

  public config: SwiperConfigInterface = {
    slidesPerView: 1,
    centeredSlides: true,
    observer: true,
    observeParents:true,
    direction: 'horizontal',
    initialSlide:0,
    keyboard: true,
    mousewheel: true,
    scrollbar: false,
    navigation: true,
    pagination: false,
    loop:true,
    uniqueNavElements:false,
    autoplay:this.autoplay
  };

  @ViewChild(SwiperComponent) componentRef: SwiperComponent;
  @ViewChild(SwiperDirective) directiveRef: SwiperDirective;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    this.config.navigation = true;                  // 这里不启用计算就loop的时候从第二个开始了
  }

}
