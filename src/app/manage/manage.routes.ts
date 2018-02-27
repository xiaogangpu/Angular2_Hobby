import { RouterModule} from '@angular/router';
import { ManageComponent} from './manage.component';
import { UserTableComponent } from "./user-table/user-table.component";
import { ArticleTableComponent} from "./article-table/article-table.component";


export const manageRoutes = [
        {
            path: '',
            component: ManageComponent,
            children:[
                {
                    path: '',
                    redirectTo:'article/1',
                    componenet:ArticleTableComponent
                },
                {
                    path: 'article/:pageId',
                    component:ArticleTableComponent
                },
                {
                    path:'user/:pageId',
                    component:UserTableComponent
                },
                { 
                    path:'**', 
                    redirectTo:'article/1'
                }             
            ]
        }
]

