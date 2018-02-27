import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HomePageComponent } from './home-page.component';
import { TourComponent } from './tour/tour.component';
import { ReadComponent } from './read/read.component';
import { AnimeComponent } from './anime/anime.component';
import { ReadDetailComponent } from './read/read-detail/read-detail.component';
import { TourDetailComponent } from './tour/tour-detail/tour-detail.component';
import { InfiniteScrollComponent } from './infinite-scroll/infinite-scroll.component';
import { UserRecommendComponent} from '../users/user-recommend/user-recommend.component';
import { LabelRecommendComponent } from '../label/label-recommend/label-recommend.component';
import { InfiniteScrollDetailComponent } from './infinite-scroll/infinite-scroll-detail/infinite-scroll-detail.component';

import {ReadService} from './read/service/read.service';
import {ReadDetailService} from './read/read-detail/services/read-detail.service';
import {TourService} from './tour/service/tour.service';
import {TourDetailService} from './tour/tour-detail/services/tour-detail.service';
import {ListService} from './infinite-scroll/services/list.service';
import {InfiniteScrollDetailService} from './infinite-scroll/infinite-scroll-detail/service/infinite-scroll-detail.service';

import {DataGridModule} from 'primeng/primeng';
import {DialogModule} from 'primeng/primeng';
import {PaginatorModule} from 'primeng/primeng';
import {PanelModule} from 'primeng/primeng';

import { SwiperModule, SwiperConfigInterface, SWIPER_CONFIG} from 'ngx-swiper-wrapper/dist/ngx-swiper-wrapper';
  const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
    threshold: 50,      
    spaceBetween: 5,   
    slidesPerView: 'auto', 
    loopedSlides:12,
    centeredSlides: true
  };
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { MoveTopComponent} from '../tool/move-top/move-top.component';

import { homePageRoutes} from './home-page.routes';

@NgModule({
  imports: [
    CommonModule,
    PaginatorModule,
    PanelModule,
    DialogModule,
    DataGridModule,
    RouterModule,
    SwiperModule,
    InfiniteScrollModule,
    RouterModule.forChild(homePageRoutes)
  ],
  declarations: [ 
    HomePageComponent,
    TourComponent,
    ReadComponent,
    AnimeComponent,
    ReadDetailComponent,
    TourDetailComponent,
    InfiniteScrollComponent,
    UserRecommendComponent,
    LabelRecommendComponent,
    InfiniteScrollDetailComponent,
    MoveTopComponent
  ],
  providers: [
    {
    provide: SWIPER_CONFIG,
    useValue: DEFAULT_SWIPER_CONFIG
    },
    ReadService,
    ReadDetailService,
    TourService,
    TourDetailService,
    ListService,
    InfiniteScrollDetailService
  ]
})
export class HomePageModule { }