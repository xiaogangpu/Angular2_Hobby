import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams} from '@angular/http';
import { Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class TourService {
  public tourUrl = "../../../assets/mock-data/tour.json";

  constructor(
    public http: Http
  ) { }

  public getTour(page: number) {
    let para = new URLSearchParams();
    para.set('page',String(page));
    return this.http.get(this.tourUrl,{search:para})
                    .map((res: Response)=>{
                      let result = res.json();
                      return result;
                    })
                    .catch((error: any) => Observable.throw(error|| 'error'));

  }
}
