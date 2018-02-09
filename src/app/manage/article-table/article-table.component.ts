import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { SelectItem } from 'primeng/primeng';
import { DataTableModule} from 'primeng/primeng';
import { ConfirmationService } from 'primeng/primeng';
import { MessageService } from 'primeng/components/common/messageservice';

import {ArticleTableService} from './services/article-table.service';

@Component({
  selector: 'app-article-table',
  templateUrl: './article-table.component.html',
  styleUrls: ['./article-table.component.css']
})
export class ArticleTableComponent implements OnInit {
  public articles = [];
  public labels = []; 
  public yearFilter: number;
  public yearTimeout: any;

  constructor(
    public router: Router,
    public activatedRoute: ActivatedRoute,
    public articleService: ArticleTableService,
    public confirmationService: ConfirmationService,
    public messageService: MessageService
  ) { }

  ngOnInit() {
    this.loadListData();
    this.getLabelData();
  }

  public getLabelData(){
    this.articleService.getLabelData().subscribe(data=>{
      this.labels = data['items'];
    });  
  }

  public loadListData(){
    this.articleService.getListData().subscribe(data=>{
      this.articles = data['items'];
    });
  }

  public editArticle(item) {
    this.addArticle(item);
  }

  public addArticle(item?:{}) {
    this.router.navigateByUrl('/manage/new-article');
  }

  /**
   * 使用滑动条筛选
   * @param event 
   * @param dt 
   * @param col 
   */
  onYearChange(event, dt, col) {
    if(this.yearTimeout) {
        clearTimeout(this.yearTimeout);
    }
    
    this.yearTimeout = setTimeout(() => {
        dt.filter(event.value, col.field, col.filterMatchMode);
    }, 250);
  }

/**
 * 弹出提示框确认删除
 * @param item 
 */
  public delArticle(item) {
    this.confirmationService.confirm({
      message: '确定要删除吗？',
      accept: () => {
        console.log(item);
        this.messageService.add({ severity: 'success', summary: '成功', detail: '删除数据成功' });
      }
    });
  }

}
