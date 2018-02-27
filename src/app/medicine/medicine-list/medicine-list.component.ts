import { Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';

import {GetMedicineService} from '../service/get-medicine.service';
import {Medicine} from '../model/medicine-model';

@Component({
  selector: 'app-medicine-list',
  templateUrl: './medicine-list.component.html',
  styleUrls: ['./medicine-list.component.css']
})
export class MedicineListComponent implements OnInit {
  public medicineList: Medicine[];

  // public start:number = 0;
  // public end:number = 0;
  // public currentPage:number = 0;
  // public totalPage:number = 0;
  // public itemsPerPage = 12;
  public totalData:number;

  public selectedMedicine:Medicine;
  public displayDialog:boolean = false;

  constructor(
    private medicineService: GetMedicineService,
    private activatedRoute: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit() { 
    //enableProdMode();
    this.activatedRoute.params.subscribe(params => {
      this.renderList(params.page);
    });
  }
  
  public renderList(currentPage){
    // this.start = (this.currentPage - 1)*this.itemsPerPage;
    // this.end = (this.currentPage)*this.itemsPerPage;
    return this.medicineService.getMedicineList(currentPage).subscribe(
      res => {
        if(!this.totalData){
          this.totalData = parseInt(res["total"],10);
        }
        this.medicineList = res["items"];
        // this.medicineList = res.slice(this.start,this.end > this.totalData ? this.totalData:this.end);
      },
			error => {console.log(error)},
			() => {}
    );
  }

  selectCar(medicine: Medicine) {
    this.selectedMedicine = medicine;
    this.displayDialog = true;
  }

  onDialogHide() {
    this.selectedMedicine = null;
  }

    /**
   * 点击页码后计算页数然后加载数据
   * @param  
   */
  public loadLazy($event) {
    let temp = $event.first / $event.rows + 1;
    this.router.navigateByUrl("/medicine/medicinelist/"+temp);
  }

}
