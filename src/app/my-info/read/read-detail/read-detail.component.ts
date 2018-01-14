import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {ReadDetailService} from './services/read-detail.service';

import { Text} from '../../model/text-model';

@Component({
  selector: 'app-read-detail',
  templateUrl: './read-detail.component.html',
  styleUrls: ['./read-detail.component.css']
})
export class ReadDetailComponent implements OnInit {
  public readId: number;
  public detail: Text = new Text();

  constructor(
    public activated: ActivatedRoute,
    public router: Router,
    public readDetailService: ReadDetailService
  ) { }

  ngOnInit() {
    this.activated.params.subscribe(params=>{
      this.readId = parseInt(params.readId);
      this.readDetailService.getReadDetail(this.readId).subscribe(
        data=> {this.detail = data},
        error=> {}
      );
    });
  }

}
