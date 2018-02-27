import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule} from "@angular/router";
import { HttpModule,JsonpModule,Http} from "@angular/http";
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule} from "@angular/forms";
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import {TranslateModule,TranslateLoader,TranslateStaticLoader} from "ng2-tranlate";

import { AppComponent } from './app.component';

import { TopMenuComponent } from './top-menu/top-menu.component';
import { FootMenuComponent } from './foot-menu/foot-menu.component';

 import { appRoutes } from './app.routes';

import { ImpressionComponent } from './impression/impression.component';
import { EchartsInfoDirective } from './impression/echarts-info.directive';

import { UserRecommendServiceService} from './users/user-recommend/services/user-recommend-service.service';
import { LabelRecommendService} from './label/label-recommend/services/label-recommend.service';
import { UserLoginService } from './manage/user-login/services/user-login.service';
import { UserRegistryService } from './manage/user-registry/services/user-registry.service';

import { UserLoginComponent } from './manage/user-login/user-login.component';
import { UserRegistryComponent } from './manage/user-registry/user-registry.component';
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
    UserLoginComponent,
    UserRegistryComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    UserRecommendServiceService,
    LabelRecommendService,
    UserLoginService,
    UserRegistryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';

// import { SharedModule } from './shared/shared.module';
// import { LoginComponent } from './login/login.component';
  // schemas: [NO_ERRORS_SCHEMA ],