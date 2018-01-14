import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { Observable} from 'rxjs/Observable';
import { Subject} from 'rxjs/Subject';

import { ReadService} from './service/read.service';
import { Text} from '../model/text-model';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  public readList:Text[];

  public totalData: number = 0;
  public currentPage: number = 1;
  public itemsPerPage: number = 5;
  public offset: number = 0;
  public end: number = 0;

  constructor(private readService: ReadService,
              private activated: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.activated.params.subscribe(params=>{
      this.currentPage = params.page;
      this.loadData();
    });
  }

  public loadData(){
    this.offset = (this.currentPage - 1)*this.itemsPerPage;
    this.end = this.currentPage*this.itemsPerPage;
    return this.readService.getReadList(this.currentPage).subscribe(res=>{
      this.totalData = res['items'].length;
      this.readList = res['items'].slice(this.offset,this.end > this.totalData ? this.totalData : this.end);
    },
    error=>{},
    ()=>{}
    );
  }

  public pageChange(event: any) {
    let page = parseInt(event.page)+1;
    this.router.navigateByUrl("myInfo/read/"+page);
  }

}
