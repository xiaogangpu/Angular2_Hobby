import {Component, Renderer, AfterContentInit, EventEmitter, ViewChild, ElementRef} from "@angular/core";
import {Observable} from 'rxjs/Observable';

@Component({
  selector: "app-move-top",
  template: `
    <style>
      .toTop {
        display: none;
        text-decoration: none;
        position: fixed;
        bottom: 10px;
        right: 60px;
        overflow: hidden;
        width: 48px;
        height: 48px;
        border: none;
        text-indent: 100%;
        background: url("../../../assets/image/moveTop.png") no-repeat 0px 0px;
      }
    </style>
        <div #greet class='toTop' (click)="moveTop()">
        </div>
  `
})
export class MoveTopComponent {
  @ViewChild('greet')
  greetDiv: ElementRef;

  constructor(private elementRef: ElementRef, private renderer: Renderer) { }

  public columnTop = '0';

  ngOnInit(){
      Observable.fromEvent(window, 'scroll').subscribe((event) => {  
        this.onWindowScroll();  
      });   
  }

  public onWindowScroll() {
    this.columnTop = (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) + 'px'; 
    if(parseInt(this.columnTop,10) >= 200){
      this.renderer.setElementStyle(this.greetDiv.nativeElement, 'display', 'block');
    }else{          //恢复正常
      this.renderer.setElementStyle(this.greetDiv.nativeElement, 'display', 'none');
    } 
  }

  public moveTop() {
    debugger
    this.renderer.setElementStyle(document.documentElement, 'scrollTop', '200');
  }

  public ngAfterContentInit() {
    setTimeout(() => {
      this.onWindowScroll()
    },10);
  }

}
