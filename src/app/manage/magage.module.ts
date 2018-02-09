import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';

import { ArticleTableComponent} from './article-table/article-table.component';
import { UserTableComponent} from './user-table/user-table.component';

import { ArticleTableService} from './article-table/services/article-table.service';
import { UserTableService} from './user-table/services/user-table.service';

import { manageRoutes} from './manage.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(manageRoutes)
  ],
  declarations: [ 
    ArticleTableComponent,
    UserTableComponent
  ],
  providers: [
    ArticleTableService,
    UserTableService
  ]
})
export class ManageModule { }