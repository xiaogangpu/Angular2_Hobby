import { Injectable } from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserListServiceService {
  public userListUrl = '../../../../asserts/mock-data/person-recommend.json';
  
  constructor(
    public http: Http
  ) { }

  public getData() {
    this.http.get(this.userListUrl)
        .map((res:Response)=>{
          let result = res.json();
          return result;
        })
        .catch(error=>Observable.throw(error || "userListError"));
  }

}
