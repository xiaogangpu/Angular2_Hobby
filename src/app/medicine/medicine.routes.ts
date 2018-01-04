import {MedicineComponent} from './medicine.component';
import {MedicineListComponent} from './medicine-list/medicine-list.component';

export const medicineRoutes = [{
    path:'',
    component:MedicineComponent,
    children:[
        {path:'',redirectTo:'medicinelist/1',pathMatch:'full'},
        {path:'medicinelist/:page',component:MedicineListComponent}
    ]
}];