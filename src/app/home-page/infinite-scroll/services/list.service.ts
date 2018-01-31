import { Injectable } from '@angular/core';
import { Http, Headers, Response} from '@angular/http';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {Tour} from '../../model/tour-model';

@Injectable()
export class ListService {
  public dataArr:Tour[];
  public sum = 100;
  public direction = '';

  public listUrl = '../../../../assets/mock-data/tour.json';

  constructor(
    public http: Http
  ) {
  }

  getListData(callBack?): Observable<Tour[]>{
    return this.http.get(this.listUrl)
      .map(
      (res:Response)=>{
        let arr = res.json().items;
        return arr;
      })
      .catch((error:any)=>Observable.throw(error || 'getListData error'));
  }

  addItems() {
    
  }

  // prependItems() {
  //   this.getListData('unshift',this.addItems);
  // }

  setDirectionDown() {
    this.getListData(this.addItems);
  }

  // setDirectionUp() {
  //   this.direction = 'up';
  //   this.prependItems();
  // }

}
