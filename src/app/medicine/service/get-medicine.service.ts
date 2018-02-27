import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import {Medicine} from '../model/medicine-model';

@Injectable()
export class GetMedicineService {
  public listUrl = '../../../assets/mock-data/medicine.json';

  constructor(public http: Http) { }

  public getMedicineList(currentPage: number): Observable<Medicine[]>{
    let param = new URLSearchParams();
    param.set("page",String(currentPage));
    return this.http
                .get(this.listUrl,{search: param})
                .map((res:Response) => {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
                  let result = res.json();
                  return result;
                })
  }
}
