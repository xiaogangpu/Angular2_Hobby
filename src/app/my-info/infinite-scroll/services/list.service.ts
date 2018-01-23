import { Injectable } from '@angular/core';
import { Http, Headers, Response} from '@angular/http';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ListService {
  public dataArr = [];
  public sum = 100;
  public direction = '';

  public listUrl = '../../../../assets/mock-data/tour.json';

  constructor(
    public http: Http
  ) {
    this.appendItems();
  }

  getListData(arrMethod,callBack?) {
    return this.http.get(this.listUrl).subscribe(
      (res:Response)=>{
        let arr = res.json().items;
        this.dataArr[arrMethod](arr);
        callBack();
      },
      (error:any)=>Observable.throw(error || 'getListData error')
    );
  }

  addItems(arrMethod) {
    
  }

  appendItems() {
    this.getListData('push',this.addItems);
  }

  prependItems() {
    this.getListData('unshift');
  }

  setDirectionDown() {
    this.direction = 'down';
    this.appendItems();
  }

  // setDirectionUp() {
  //   this.direction = 'up';
  //   this.prependItems();
  // }

}
