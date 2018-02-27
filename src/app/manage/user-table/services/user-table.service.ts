import { Injectable } from '@angular/core';
import { Http, Response,  Headers, URLSearchParams} from '@angular/http';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserTableService {
  public userUrl = "../../../../assets/mock-data/manage-user.json";

  constructor(
    public http: Http
  ) { }

  public getData(page:any){
    let temp = new URLSearchParams();
    temp.set('page',String(page));
    return this.http.get(this.userUrl,{search:temp})
                    .map((res:Response)=>{
                      let result = res.json();
                      return result;
                    })
                    .catch(error=>Observable.throw(error || 'manageArticleError'));
  }
}
