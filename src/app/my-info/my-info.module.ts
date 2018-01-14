import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';

import {PaginatorModule} from 'primeng/primeng';

import { MyInfoComponent } from './my-info.component';
import { TourComponent } from './tour/tour.component';
import { CollegeComponent } from './college/college.component';
import { ReadComponent } from './read/read.component';
import { AnimeComponent } from './anime/anime.component';
import { ReadDetailComponent } from './read/read-detail/read-detail.component';

import {ReadService} from './read/service/read.service';
import {ReadDetailService} from './read/read-detail/services/read-detail.service';

import { myInfoRoutes} from './my-info.routes';

@NgModule({
  imports: [
    CommonModule,
    PaginatorModule,
    RouterModule,
    RouterModule.forChild(myInfoRoutes)
  ],
  declarations: [
    MyInfoComponent,
    TourComponent,
    CollegeComponent,
    ReadComponent,
    AnimeComponent,
    ReadDetailComponent
  ],
  providers: [
    ReadService,
    ReadDetailService
  ]
})
export class MyInfoModule { }
