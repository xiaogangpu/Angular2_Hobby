import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';

import {MedicineComponent} from './medicine.component';

import {DataGridModule} from 'primeng/primeng';
import {DialogModule} from 'primeng/primeng';
import {PaginatorModule} from 'primeng/primeng';
import {PanelModule} from 'primeng/primeng';

// import {DataGridModule} from 'primeng/components/datagrid/datagrid';
// import {DialogModule} from 'primeng/components/dialog/dialog';
// import {PaginatorModule} from 'primeng/components/paginator/paginator';
// import {PanelModule} from 'primeng/components/panel/panel';

import {GetMedicineService} from './get-medicine.service';
import { MedicineListComponent } from './medicine-list/medicine-list.component';

import {medicineRoutes} from './medicine.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    DataGridModule,
    DialogModule,
    PaginatorModule,
    PanelModule,
    RouterModule.forChild(medicineRoutes)
  ],
  declarations: [
    MedicineComponent,
    MedicineListComponent
  ],
  providers:[GetMedicineService]
})
export class MedicineModule { }
