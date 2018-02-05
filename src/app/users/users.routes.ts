import { RouterModule } from '@angular/router';
import { UserListComponent} from './user-list/user-list.component';
import { UserListTabComponent} from './user-list-tab/user-list-tab.component';
import { UserListTabDetailComponent} from './user-list-tab-detail/user-list-tab-detail.component';

export const usersRoutes = [
    { 
        path:'',
        redirectTo:'user-list/1',
        pathMath:'full'
    },
    {
        path:'user-list',
        component:UserListComponent
    },
    {
        path:'user-list-tab/:userId',
        component:UserListTabComponent
    },
    {
        path: 'user-list-tab-detail/:numId',
        component:UserListTabDetailComponent
    }
];