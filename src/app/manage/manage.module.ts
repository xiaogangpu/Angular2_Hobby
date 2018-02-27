import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';

import {DataGridModule} from 'primeng/primeng';
import { DataTableModule} from 'primeng/primeng';
import {DialogModule} from 'primeng/primeng';
import {SliderModule} from 'primeng/primeng';
import {DropdownModule} from 'primeng/primeng';
import {PaginatorModule} from 'primeng/primeng';
import {PanelModule} from 'primeng/primeng';
import {ConfirmDialogModule} from 'primeng/primeng';
import { ConfirmationService } from 'primeng/primeng';
import { MessageService } from 'primeng/components/common/messageservice';

import { ManageComponent} from './manage.component';
import { ArticleTableComponent} from './article-table/article-table.component';
import { UserTableComponent} from './user-table/user-table.component';

import { ArticleTableService} from './article-table/services/article-table.service';
import { UserTableService} from './user-table/services/user-table.service';

import { manageRoutes} from './manage.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    DataTableModule,
    PanelModule,
    PaginatorModule,
    SliderModule,
    DropdownModule,
    ConfirmDialogModule,
    RouterModule.forChild(manageRoutes)
  ],
  declarations: [ 
    ManageComponent,
    ArticleTableComponent,
    UserTableComponent
  ],
  providers: [
    ConfirmationService,
    MessageService,
    ArticleTableService,
    UserTableService
  ]
})
export class ManageModule { }