import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { ListService } from './services/list.service';
import {Tour} from '../model/tour-model';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.component.html',
  styleUrls: ['./infinite-scroll.component.css']
})
export class InfiniteScrollComponent implements OnInit {
  public throttle = 600;
  public array:Tour[] = [];
  public scrollDistance = 3;

  constructor(public listMaker: ListService) { }

  ngOnChanges(){
  }

  ngOnInit() {
   this.loadData();
  }

  public loadData(){
    return this.listMaker.getListData().subscribe(
      res=>{
       this.getListData(res);
      },
      error=>{},
      ()=>{}
    );
  }

  getListData(arr){
    for(let i=0;i<arr.length;i++) {
      this.array.push(arr[i]);
    }
  }

  onScrollDown(ev) {
    // console.log(`scrolled down, from ${this.className} ${this.info}`);
    this.loadData();
  }

  onUp(ev) {
    // this.listMaker.setDirectionUp();
  }

}
