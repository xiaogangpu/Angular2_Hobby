import { RouterModule } from '@angular/router';
import { LabelListComponent} from './label-list/label-list.component';
import { LabelListTabComponent} from './label-list-tab/label-list-tab.component';
import { LabelListTabDetailComponent} from './label-list-tab-detail/label-list-tab-detail.component';

export const labelRoutes = [
    { 
        path:'',
        redirectTo:'label-list/1',
        pathMath:'full'
    },
    {
        path: 'label-list',
        component:LabelListComponent
    },
    {
        path:'label-list-tab/:labelId',
        component:LabelListTabComponent
    },
    {
        path: 'label-list-tab-detail/:numId',
        component:LabelListTabDetailComponent
    }
];