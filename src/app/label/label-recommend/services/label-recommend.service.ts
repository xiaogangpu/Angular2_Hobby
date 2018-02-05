import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http'; 
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class LabelRecommendService {
  public recommendUrl = "../../../../assets/mock-data/label-recommend.json";

  constructor(public http:Http) { }

  public getData(){
    return this.http.get(this.recommendUrl)
            .map((res:Response) => {
              let result = res.json();
              return result;
            })
            .catch((error:any) =>Observable.throw(error || 'error'));
  }

}
