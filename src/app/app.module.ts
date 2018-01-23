import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from "@angular/router";
import {HttpModule,JsonpModule,Http} from "@angular/http";
import {ReactiveFormsModule} from "@angular/forms";
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import {TranslateModule,TranslateLoader,TranslateStaticLoader} from "ng2-tranlate";

import { AppComponent } from './app.component';

import { TopMenuComponent } from './top-menu/top-menu.component';
import { FootMenuComponent } from './foot-menu/foot-menu.component';

 import { appRoutes } from './app.routes';

import { ImpressionComponent } from './impression/impression.component';
import { EchartsInfoDirective } from './impression/echarts-info.directive';
import { InfoBarComponent } from './info-bar/info-bar.component';

// export function createTranslateLoader(http: Http) {
//   return new TranslateStaticLoader(http, './assets/i18n', '.json');
// }

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    FootMenuComponent,
    ImpressionComponent,
    EchartsInfoDirective,
    InfoBarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';

// import { SharedModule } from './shared/shared.module';
// import { LoginComponent } from './login/login.component';
  // schemas: [NO_ERRORS_SCHEMA ],