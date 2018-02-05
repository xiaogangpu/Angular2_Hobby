import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';

import { UserListComponent} from './user-list/user-list.component';
import { UserListTabComponent } from './user-list-tab/user-list-tab.component';
import { UserListTabDetailComponent } from './user-list-tab-detail/user-list-tab-detail.component';

import { UserRecommendServiceService} from './user-recommend/services/user-recommend-service.service';
import { UserListServiceService} from './user-list/services/user-list-service.service';
import { UserListTabService} from './user-list-tab/services/user-list-tab.service';
import { UserListTabDetailService} from './user-list-tab-detail/services/user-list-tab-detail.service';

import { usersRoutes} from './users.routes';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';
// import {TabsModule} from 'ngx-tabset/modules/ngx-tabset';
import { TabsetComponent } from './tab/tab-set';
import { TabHeadingDirective } from './tab/tab-heading';
import { TabComponent } from './tab/tab';
import { TabTranscludeDirective } from './tab/tab-transclude';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    InfiniteScrollModule,
    RouterModule.forChild(usersRoutes)
  ],
  declarations: [ 
    UserListComponent,
    UserListTabComponent,
    UserListTabDetailComponent,
    TabsetComponent,
    TabHeadingDirective,
    TabComponent,
    TabTranscludeDirective
  ],
  providers: [
    UserRecommendServiceService,
    UserListServiceService,
    UserListTabService,
    UserListTabDetailService
  ]
})
export class UsersModule { }