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
        font-size:20px;
        color:#504D46;
      }

      .tabset-style ul.tabset-header li {
        display:inline-block;
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
    <nav [ngClass]="{'tabset-style': !disableStyle}">
      <ul class="tabset-header" [ngClass]="customNavClass">
        <li role="presentation" *ngFor="let tab of tabs" [class.active]="tab.active"
            [class.disabled]="tab.disabled" (click)="changeActiveTab(tab)">
          <span [tabTransclude]="tab.headingTemplate">{{ tab.title }}</span>
        </li>
      </ul>
    </nav>
    <div class="tabs-container" [ngClass]="customTabsClass" [@.disabled]="!animate">
      <div class="tabset-content">
        <ng-content></ng-content>
      </div>
    </div>
  `
})
export class TabsetComponent implements AfterContentInit {
  @Input() public disableStyle: boolean;

  @Input() public animate: boolean = true;

  @Input() public customNavClass: string = '';

  @Input() public customTabsClass: string = '';

  @ContentChildren(TabComponent) public tabs: QueryList<TabComponent>;

  @Output() public onSelect = new EventEmitter(false);

  public changeActiveTab(tab: TabComponent) {
    if (!tab.disabled && !tab.active) {
      const me = this;
      const tabs = this.tabs.toArray();
      tabs.forEach((t) => t.active = false);
      if (this.animate) {
        setTimeout(() => {
          tab.active = true;
          me.onSelect.emit(tabs.indexOf(tab));
        }, 200);
      } else {
        tab.active = true;
        me.onSelect.emit(tabs.indexOf(tab));
      }
    }
  }

  public ngAfterContentInit() {
    setTimeout(() => {
      const readTabs = this.tabs.toArray();
      const activeTab = readTabs.find((tab) => tab.active === true);
      if (!activeTab && readTabs.length > 0) {
        readTabs[0].active = true;
      }
    });
  }

}
