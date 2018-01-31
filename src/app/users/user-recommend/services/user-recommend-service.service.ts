import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http'; 
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { person} from '../../model/person-model';

@Injectable()
export class UserRecommendServiceService {
  public recommendUrl = "../../../../assets/mock-data/person-recommend.json";

  constructor(public http:Http) { }

  public getData():Observable<person>{
    return this.http.get(this.recommendUrl)
            .map((res:Response) => {
              let result = res.json();
              return result;
            })
            .catch((error:any) =>Observable.throw(error || 'error'));
  }

}
