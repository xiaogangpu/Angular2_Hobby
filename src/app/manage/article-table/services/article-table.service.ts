import { Injectable } from '@angular/core';
import { Http, Response,  Headers} from '@angular/http';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ArticleTableService {
  public articleUrl = "../../../../assets/manage-article.json";
  public articleLabel = "../../../../assets/articleLabel.json";

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

  public getListData(){
    return this.http.get(this.articleUrl)
                    .map((res:Response)=>{
                      let result = res.json();
                      return result;
                    })
                    .catch(error=>Observable.throw(error || 'manageArticleError'));
  }
}
