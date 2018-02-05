import {Component, Input, ContentChild, TemplateRef} from "@angular/core";
import {trigger, style, animate, transition} from '@angular/animations';
import {TabHeadingDirective} from "./tab-heading";

@Component({
  animations: [
    trigger(
      'myAnimation',
      [
        transition(
          ':enter', [
            style({opacity: 0}),
            animate('200ms 200ms', style({opacity: 1}))
          ]
        ),
        transition(
          ':leave', [
            style({opacity: 1}),
            animate('200ms', style({opacity: 0}))

          ]
        )]
    )
  ],
  selector: "ngx-tab",
  template: `
    <div *ngIf="active" [@myAnimation]>
      <ng-content></ng-content>
    </div>
  `
})
export class TabComponent {

  @ContentChild(TabHeadingDirective)
  public heading: TabHeadingDirective;

  @Input()
  public title: string;

  @Input()
  public active: boolean = false;

  @Input()
  public disabled = false;

  get headingTemplate(): TemplateRef<any> | null {
    return this.heading ? this.heading.templateRef : null;
  }
}
