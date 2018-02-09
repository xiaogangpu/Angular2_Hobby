import { Injectable } from '@angular/core';
import { Http, Response,  Headers} from '@angular/http';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserTableService {
  public userUrl = "../../../../assets/manage-user.json";

  constructor(
    public http: Http
  ) { }

  public getData(){
    return this.http.get(this.userUrl)
                    .map((res:Response)=>{
                      let result = res.json();
                      return result;
                    })
                    .catch(error=>Observable.throw(error || 'manageArticleError'));
  }
}
