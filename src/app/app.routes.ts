import {ImpressionComponent} from "./impression/impression.component";
import {MedicineComponent} from "./medicine/medicine.component";

export const appRoutes = [
	{
		path:'',
		redirectTo:'impression',
		pathMatch:'full'
	},{
		path:'impression',
		component:ImpressionComponent
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
		path:'**',
		component:ImpressionComponent
	}
];

