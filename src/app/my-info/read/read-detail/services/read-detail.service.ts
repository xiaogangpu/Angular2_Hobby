import { Injectable } from '@angular/core';
import { Http, Headers, Response, URLSearchParams} from '@angular/http';
import {  Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ReadDetailService {
  public readDetailUrl = '../../../../assets/mock-data/readDetail.json';

  constructor(
    public http: Http
  ) { }

  public getReadDetail(readId: number): Observable<any> {
    let param = new URLSearchParams();
    param.set('readId',String(readId));
    return this.http.get(this.readDetailUrl,{search:param})
                    .map(
                    res=>{
                      let result = res.json();
                      return result;
                    })
                    .catch((error: any)=>Observable.throw(error || 'error'));;
  }
}
