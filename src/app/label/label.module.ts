import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';

import { LabelListComponent} from './label-list/label-list.component';
import { LabelListTabComponent } from './label-list-tab/label-list-tab.component';
import { LabelListTabDetailComponent } from './label-list-tab-detail/label-list-tab-detail.component';

import { LabelListService} from './label-list/services/label-list.service';
import { LabelListTabService} from './label-list-tab/services/label-list-tab.service';
import { LabelListTabDetailService} from './label-list-tab-detail/services/label-list-tab-detail.service';

import { labelRoutes} from './label.routes';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { TabsetComponent } from './tab/tab-set';
import { TabHeadingDirective } from './tab/tab-heading';
import { TabComponent } from './tab/tab';
import { TabTranscludeDirective } from './tab/tab-transclude';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    InfiniteScrollModule,
    RouterModule.forChild(labelRoutes)
  ],
  declarations: [ 
    TabsetComponent,
    TabHeadingDirective,
    TabComponent,
    TabTranscludeDirective,
    LabelListComponent,
    LabelListTabComponent,
    LabelListTabDetailComponent
  ],
  providers: [
    LabelListService,
    LabelListTabService,
    LabelListTabDetailService
  ]
})
export class LabelModule { }