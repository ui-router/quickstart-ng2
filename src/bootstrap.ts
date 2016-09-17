import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {trace, Category, UIRouterModule, UIView} from "ui-router-ng2";
import {NgModule, NgModuleFactoryLoader, SystemJsNgModuleLoader} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";

import {MAIN_STATES} from "./app.states";
import {AppComponent} from "./app.component";
import {FooModule} from "./foo/foo.module";
import {BarModule} from "./bar/bar.module";
import {MyRootUIRouterConfig} from "./router.config";

// Enables tracing (check the console) of:
// - TRANSITION transition start, redirect, success, error, ignored
// - VIEWCONFIG ui-view component creation/destruction and viewconfig de/activation
trace.enable(Category.TRANSITION, Category.VIEWCONFIG);

@NgModule({
  imports: [
    BrowserModule,
    UIRouterModule.forRoot({
      states: MAIN_STATES,
      otherwise: { state: 'app', params: {} },
      useHash: true,
      configClass: MyRootUIRouterConfig
    }),
    FooModule,
    BarModule,
    // BazModule will be lazy loaded
  ],
  declarations: [ AppComponent ],
  providers: [
    // Provide a NgModule lazy loading strategy
    { provide: NgModuleFactoryLoader, useClass: SystemJsNgModuleLoader },
  ],
  bootstrap: [UIView],
})
class RootModule {}

platformBrowserDynamic().bootstrapModule(RootModule);
