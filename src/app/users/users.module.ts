import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';

import { UserListComponent} from './user-list/user-list.component';
import { UserListDetailComponent} from './user-list-detail/user-list-detail.component';

import { UserRecommendServiceService} from './user-recommend/services/user-recommend-service.service';
import { UserListServiceService} from './user-list/services/user-list-service.service';

import { usersRoutes} from './users.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(usersRoutes)
  ],
  declarations: [ 
    UserListComponent,
    UserListDetailComponent
  ],
  providers: [
    UserRecommendServiceService,
    UserListServiceService
  ]
})
export class UsersModule { }