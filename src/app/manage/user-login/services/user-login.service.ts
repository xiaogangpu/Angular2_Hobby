import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { User } from '../../model/user-model';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class UserLoginService {
  public userLoginUrl = "../../../../assets/mock-data/user-login.json";
  public subject:Subject<User> = new Subject<User>();

  constructor(public http: Http){}
  public get currentUser(): Observable<User>{
    return this.subject.asObservable();
  }

  public login(user: User) {
    return this.http.get(this.userLoginUrl)
                    .map((res:Response) =>{
                      let user = res.json();
                      if(user && user.token) {
                        localStorage.setItem("currentUser",JSON.stringify(user));
                        this.subject.next(Object.assign({},user));
                      }
                      return res;
                    }).subscribe(data=>{

                    },
                    error=>{

                    }
                    );
  }

  public logOut(): void{
    localStorage.removeItem("currentUser");
    this.subject.next(Object.assign({}));
  }

}
