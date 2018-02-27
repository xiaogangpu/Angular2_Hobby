import { Injectable } from '@angular/core';
import { Http, Response,  Headers, URLSearchParams} from '@angular/http';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ArticleTableService {
  public articleUrl = "../../../../assets/mock-data/manage-article.json";
  public articleLabel = "../../../../assets/mock-data/articleLabel.json";

  constructor(
    public http: Http
  ) { }

  public getLabelData() {
    return this.http.get(this.articleLabel)
                    .map((res:Response)=>{
                      let result = res.json();
                      return result;
                    })
                    .catch(error=>Observable.throw(error || 'articleLabelError'));
  }

  public getListData(page){
    let temp = new URLSearchParams();
    temp.set('page',String(page));
    return this.http.get(this.articleUrl,{search:temp})
                    .map((res:Response)=>{
                      let result = res.json();
                      return result;
                    })
                    .catch(error=>Observable.throw(error || 'manageArticleError'));
  }
}
