import { Directive,Input,Output,ElementRef,HostListener } from '@angular/core';
import * as $ from 'jquery';
import * as echarts from 'echarts';

@Directive({
  selector: 'appEchartsInfo'
})
export class EchartsInfoDirective {
  @Input('chartType') chartType: any;
  
  constructor(private el: ElementRef) {}
  
  public ngOnInit(): void {
      echarts.init(this.el.nativeElement).setOption(this.chartType);
  }


}
