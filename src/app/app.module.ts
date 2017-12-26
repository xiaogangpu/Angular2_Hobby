import { BrowserModule } from '@angular/platform-browser';
import { NgModule,NO_ERRORS_SCHEMA } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from "@angular/router";
import {HttpModule,JsonpModule,Http} from "@angular/http";
import {ReactiveFormsModule} from "@angular/forms";
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import {TranslateModule,TranslateLoader,TranslateStaticLoader} from "ng2-tranlate";

import { AppComponent } from './app.component';

import {DataGridModule} from 'primeng/primeng';
import {DialogModule} from 'primeng/primeng';

import { TopMenuComponent } from './top-menu/top-menu.component';
import { FootMenuComponent } from './foot-menu/foot-menu.component';
import { MyInfoComponent } from './my-info/my-info.component'
 import { appRoute } from './app.routes';

import { MedicineComponent } from './medicine/medicine.component';
import { ImpressionComponent } from './impression/impression.component';
import { EchartsInfoDirective } from './impression/echarts-info.directive';

import {GetMedicineService} from './medicine/get-medicine.service';

// export function createTranslateLoader(http: Http) {
//   return new TranslateStaticLoader(http, './assets/i18n', '.json');
// }

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
    RouterModule,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule,
    DataGridModule,
    DialogModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [GetMedicineService],
  schemas: [NO_ERRORS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';

// import { SharedModule } from './shared/shared.module';
// import { LoginComponent } from './login/login.component';
