import { ImpressionComponent} from "./impression/impression.component";
import { UserTableComponent } from "./manage/user-table/user-table.component";
import { UserLoginComponent} from './manage/user-login/user-login.component';
import { UserRegistryComponent} from './manage/user-registry/user-registry.component';

export const appRoutes = [
	{
		path:'',
		redirectTo:'impression',
		pathMatch:'full'
	},{
		path:'impression',
		component:ImpressionComponent
	},{
		path: 'login',
		component:UserLoginComponent
	},
	{
		path: 'register',
		component:UserRegistryComponent
	},
	{
		path:'medicine',
		loadChildren:'./medicine/medicine.module#MedicineModule'
	},
	{
		path:'homePage',
		loadChildren:'./home-page/home-page.module#HomePageModule'
	},
	{
		path: 'users',
		loadChildren: './users/users.module#UsersModule'
	},
	{
		path: 'label',
		loadChildren: './label/label.module#LabelModule'
	},
	{
		path: 'manage',
		loadChildren: './manage/manage.module#ManageModule'
	},
	{
		path:'**',
		component:ImpressionComponent
	}
];

