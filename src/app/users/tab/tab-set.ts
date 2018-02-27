import {ContentChildren, Component, QueryList, Input, AfterContentInit, EventEmitter, Output} from "@angular/core";
import {TabComponent} from "./tab";
import {TabTranscludeDirective} from "./tab-transclude";

@Component({
  selector: "ngx-tabset",
  template: `
    <style>
      .tabset-style{
        padding-bottom:15px;
        margin-bottom:15px;
        border-bottom:1px dotted #ccc;
      }

      .tabset-style ul.tabset-header {
        width:100%;
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        font-size:20px;
        color:#504D46;
      }

      .tabset-style ul.tabset-header li {
        padding: 12px;
      }

      /* Optional style that can be disabled */
      .tabset-style ul.tabset-header li:hover {
        cursor: pointer;
        -moz-box-shadow: inset 0 -4px 0 0 lightgray;
        -webkit-box-shadow: inset 0 -4px 0 0 lightgray;
        box-shadow: inset 0 -4px 0 0 lightgray;
      }

      .tabset-style ul.tabset-header li.disabled {
        opacity: .4;
      }

      .tabset-style ul.tabset-header li.disabled:hover {
        -moz-box-shadow: none;
        -webkit-box-shadow: none;
        box-shadow: none;
        cursor: not-allowed;
      }

      .tabset-style ul.tabset-header li.active {
        color:#333;
        -moz-box-shadow: inset 0 -4px 0 0 #1F2E9B;
        -webkit-box-shadow: inset 0 -4px 0 0 #1F2E9B;
        box-shadow: inset 0 -4px 0 0 #1F2E9B;
      }

      .tabset-content {
      }
    </style>
        <li (click)="onClick($event)">
          <span [tabTransclude]="tab.headingTemplate">{{ tab.title }}</span>
        </li>
  `
})
export class TabsetComponent implements AfterContentInit {
  @Output() public onSelect = new EventEmitter(false);

  public onClick($event) {
    const me = this;
    setTimeout(() => {

    }, 200);
  }

  public ngAfterContentInit() {
    setTimeout(() => {

    });
  }

}
