import { Injectable } from '@angular/core';
import { Http, URLSearchParams, Response} from '@angular/http';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserListTabDetailService {
  public userListTabDetailUrl = '../../../../../assets/mock-data/article.json';

  constructor(
    public http: Http
  ) { }

  public getUserListTabDetail(numId: number) {
    let param = new URLSearchParams();
    param.set('id',String(numId));
    return this.http.get(this.userListTabDetailUrl,{search:param})
                    .map((res: Response)=>{
                      let result = res.json();
                      return result;
                    })
                    .catch((error: any)=>Observable.throw(error || 'error'));
  }
}
