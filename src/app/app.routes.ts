import {ImpressionComponent} from "./impression/impression.component";
import {MedicineComponent} from "./medicine/medicine.component";

export const appRoute = [
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
		component:MedicineComponent
	},
	{
		path:'study',
		loadChildren:'./study/study.module#StudyModule'
	},
	{
		path:'**',
		component:ImpressionComponent
	}
];

