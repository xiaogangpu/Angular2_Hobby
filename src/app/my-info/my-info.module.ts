import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';

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

import { MyInfoComponent } from './my-info.component';
import { TourComponent } from './tour/tour.component';
import { ReadComponent } from './read/read.component';
import { AnimeComponent } from './anime/anime.component';
import { ReadDetailComponent } from './read/read-detail/read-detail.component';
import { TourDetailComponent } from './tour/tour-detail/tour-detail.component';

import {ReadService} from './read/service/read.service';
import {ReadDetailService} from './read/read-detail/services/read-detail.service';
import {TourService} from './tour/service/tour.service';
import {TourDetailService} from './tour/tour-detail/services/tour-detail.service';

import { myInfoRoutes} from './my-info.routes';

@NgModule({
  imports: [
    CommonModule,
    PaginatorModule,
    PanelModule,
    DialogModule,
    DataGridModule,
    RouterModule,
    SwiperModule,
    RouterModule.forChild(myInfoRoutes)
  ],
  declarations: [ 
    MyInfoComponent,
    TourComponent,
    ReadComponent,
    AnimeComponent,
    ReadDetailComponent,
    TourDetailComponent
  ],
  providers: [
    {
    provide: SWIPER_CONFIG,
    useValue: DEFAULT_SWIPER_CONFIG
    },
    ReadService,
    ReadDetailService,
    TourService,
    TourDetailService
  ]
})
export class MyInfoModule { }