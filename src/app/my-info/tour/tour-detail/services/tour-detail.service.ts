import { Injectable } from '@angular/core';
import { Http, Headers, Response, URLSearchParams} from '@angular/http';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class TourDetailService {
  public tourDetailUrl = '../../../../assets/mock-data/tourDetail.json';

  constructor(
    public http: Http
  ) { }

  public getTourDetail(detailId: number) {
    let param = new URLSearchParams();
    param.set('id',String(detailId));
    return this.http.get(this.tourDetailUrl,{search:param})
                    .map((res: Response)=>{
                      let result = res.json();
                      return result;
                    })
                    .catch((error: any)=>Observable.throw(error || 'error'));
  }
}