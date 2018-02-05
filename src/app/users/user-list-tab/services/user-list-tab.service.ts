import { Injectable } from '@angular/core';
import { Http, URLSearchParams, Response} from '@angular/http';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';

@Injectable()
export class UserListTabService {
  public userListTabUrl = "";
  public userListTabUrl0 = "../../../../assets/mock-data/userListTab0.json";
  public userListTabUrl1 = "../../../../assets/mock-data/userListTab1.json";
  public userListTabUrl2 = "../../../../assets/mock-data/userListTab2.json";

  public arrTab = [this.userListTabUrl0,this.userListTabUrl1,this.userListTabUrl2];

  constructor(
    public http:Http
  ) { }

  public getData(userId: number,currTab: number){
    let param = new URLSearchParams();
    param.set("userId",String(userId));
    param.set("currentTab",String(currTab));

    this.userListTabUrl = this.arrTab[currTab];

    return this.http.get(this.userListTabUrl,{search: param})
                    .map((res: Response)=>{
                      let result = res.json();
                      return result;
                    })
                    .catch(error=>Observable.throw(error || "userListDeatilError"));
  }
}
