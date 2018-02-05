import { Injectable } from '@angular/core';
import { Http, URLSearchParams, Response} from '@angular/http';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';

@Injectable()
export class LabelListTabService {
  public labelListTabUrl = "";
  public labelListTabUrl0 = "../../../../assets/mock-data/labelListTab0.json";
  public labelListTabUrl1 = "../../../../assets/mock-data/labelListTab1.json";
  public labelListTabUrl2 = "../../../../assets/mock-data/labelListTab2.json";

  public arrTab = [this.labelListTabUrl0,this.labelListTabUrl1,this.labelListTabUrl2];

  constructor(
    public http:Http
  ) { }

  public getData(labelId: number,currTab: number){
    let param = new URLSearchParams();
    param.set("userId",String(labelId));
    param.set("currentTab",String(currTab));

    this.labelListTabUrl = this.arrTab[currTab];

    return this.http.get(this.labelListTabUrl,{search: param})
                    .map((res: Response)=>{
                      let result = res.json();
                      return result;
                    })
                    .catch(error=>Observable.throw(error || "userListDeatilError"));
  }
}
