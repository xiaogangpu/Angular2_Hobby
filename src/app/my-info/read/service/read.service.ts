import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams} from '@angular/http';
import { Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Text} from '../../model/text-model';

@Injectable()
export class ReadService {
  public readListUrl = '../../../assets/mock-data/read.json';

  constructor(private http: Http) { }

  public getReadList(currentPage: number): Observable<Text[]>{
    let param = new URLSearchParams();
    param.set('page',String(currentPage));
    return this.http.get(this.readListUrl,{search:param})
    .map((res:Response) => {
        let result = res.json();
        return result;}
    ).catch((error:any)=>Observable.throw( error || 'read.json error'));
  }

}
