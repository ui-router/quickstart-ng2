/**
 * Created by kolkov on 8/31/2016.
 */

// Imports for loading & configuring the in-memory web api
import {HttpModule} from '@angular/http';
import {BrowserModule}  from '@angular/platform-browser';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

import {trace, UIView, UIRouterConfig, Category, UIRouterModule} from "ui-router-ng2";
import {MyUIRouterConfig} from "./_bootstrap/router.config";
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import {AppComponent} from "./app.component";
import {FooModule} from "./foo/foo.module";
import {BazModule} from "./baz/baz.module";
import {BarModule} from "./bar/bar.module";


// Enables tracing (check the console) of:
// - TRANSITION transition start, redirect, success, error, ignored
// - VIEWCONFIG ui-view component creation/destruction and viewconfig de/activation
trace.enable(Category.TRANSITION, Category.VIEWCONFIG);

let appState =  { name: 'app', component: AppComponent };

@UIRouterModule({
  imports: [
    BrowserModule,
    HttpModule,
    FooModule,
    BazModule,
    BarModule
  ],
  declarations: [
    /*AppComponent*/
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    {provide: UIRouterConfig, useClass: MyUIRouterConfig},
  ],
  states: [appState],
  bootstrap: [UIView]
})
export class AppModule {
}
