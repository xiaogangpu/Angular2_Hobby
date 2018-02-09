import { Injectable } from '@angular/core';
import { Http, Headers, Response} from '@angular/http';
import { Observable} from 'rxjs/Observable';
import { Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { User} from '../../model/user-model';

@Injectable()
export class UserRegistryService {
  public registerUrl = '../../../../assets/mock-data/user-register.json';
  public user: User = new User();
  public subject:Subject<User> = new Subject<User>();

  constructor(
    public http: Http
  ) { }

  public get currentUser():Observable<User>{
    return this.subject.asObservable();
  }

  public register(user:User){
    return this.http.get(this.registerUrl)
                    .map((res: Response)=>{
                      let user = res.json();
                      localStorage.setItem("currentUser",JSON.stringify(user));
                      this.subject.next(user);
                    })
                    .catch(error=>Observable.throw(error || "registerError"));
  }

  public testEmail(email:any){
    return this.http.get(this.registerUrl)
                    .map((res: Response)=>{
                      return res.json();
                    })
                    .catch(error=>Observable.throw( error || "testEmailError"));
  }

}
