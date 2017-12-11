import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {

  constructor() { }

  ngOnchange(){
   
  }

  ngOnInit() {
    $(function () {
      $(document).on('mouseenter', 'li', function () {
          $(this).find('.dropdown:first').show(200);
      }).on('mouseleave', 'li', function () {
          $(this).find('.dropdown:first').stop(true, true).hide(200);
      });
      // $('.dropdown').each(function () {
      //     $(this).parents('li:eq(0)').addClass('has_dd');
      // }); 
    });
    
  }

}
