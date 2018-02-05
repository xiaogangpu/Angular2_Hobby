import { Injectable } from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class LabelListService {
  public labelListUrl = '../../../../assets/mock-data/label-recommend.json';
  
  constructor(
    public http: Http
  ) { }

  public getData() {
    return this.http.get(this.labelListUrl)
        .map((res:Response)=>{
          let result = res.json();
          return result;
        })
        .catch(error=>Observable.throw(error || "userListError"));
  }

}
