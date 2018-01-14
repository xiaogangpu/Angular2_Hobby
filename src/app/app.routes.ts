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
		path:'myInfo',
		loadChildren:'./my-info/my-info.module#MyInfoModule'
	},
	{
		path:'**',
		component:ImpressionComponent
	}
];

