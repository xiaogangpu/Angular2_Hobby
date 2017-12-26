import { Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';


import {GetMedicineService} from './get-medicine.service';
import {Medicine} from './model/medicine-model';

@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.css']
})
export class MedicineComponent implements OnInit {
  public medicineList: Medicine[];

  public start:number = 0;
  public end:number = 0;
  public currentPage:number = 0;
  public totalPage:number = 0;
  public totalData:number = 0;
  public itemsPerPage = 12;

  public selectedMedicine:Medicine;
  public displayDialog:boolean = false;

  constructor(
    private medicineService: GetMedicineService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() { 
    this.renderList();
    // this.activatedRoute.params.subscribe(params => {
    //   this.currentPage = params.page;
     
    // });
  }
  
  public renderList(){
    this.start = (this.currentPage - 1)*this.itemsPerPage;
    this.end = (this.currentPage)*this.itemsPerPage;
    return this.medicineService.getMedicineList().subscribe(
      res => {
        this.totalData = res["items"].length;
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

}
