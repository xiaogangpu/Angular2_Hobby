import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from "@angular/router";
import {HttpModule,JsonpModule,Http} from "@angular/Http";
import {ReactiveFormsModule} from "@angular/forms";
// import {TranslateModule,TranslateLoader,TranslateStaticLoader} from "ng2-tranlate";

import { AppComponent } from './app.component';
import {ButtonModule} from 'primeng/primeng';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { FootMenuComponent } from './foot-menu/foot-menu.component';
import { MyInfoComponent } from './my-info/my-info.component'
 import { appRoute } from './app.routes';

import { MedicineComponent } from './medicine/medicine.component';
import { ImpressionComponent } from './impression/impression.component';
import { EchartsInfoDirective } from './impression/echarts-info.directive';


@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    FootMenuComponent,
    MyInfoComponent,
    ImpressionComponent,
    MedicineComponent,
    ImpressionComponent,
    EchartsInfoDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';

// import { SharedModule } from './shared/shared.module';
// import { LoginComponent } from './login/login.component';
