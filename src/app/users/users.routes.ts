import { RouterModule } from '@angular/router';
import { UserListComponent} from './user-list/user-list.component';
import { UserListDetailComponent} from './user-list-detail/user-list-detail.component';

export const usersRoutes = [
    { 
        path:'',
        redirectTo:'user-list/1',
        pathMath:'full'
    },
    {
        path:'user-list/:pageId',
        component:UserListComponent
    },
    {
        path:'user-list-detail/:postId',
        component:UserListDetailComponent
    }
];