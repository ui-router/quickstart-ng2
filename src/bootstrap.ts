import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {LocationStrategy, HashLocationStrategy} from "@angular/common";
import {UIView, trace, UIRouterConfig, Category, UIRouterModule} from "ui-router-ng2";

import {CommonModule} from "./common.module";
import {FooModule} from "./foo/foo.module";
import {BarModule} from "./bar/bar.module";
import {BazModule} from "./baz/baz.module";

import {MyUIRouterConfig} from "./router.config";
import {MAIN_STATES} from "./app.states";

// Enables tracing (check the console) of:
// - TRANSITION transition start, redirect, success, error, ignored
// - VIEWCONFIG ui-view component creation/destruction and viewconfig de/activation
trace.enable(Category.TRANSITION, Category.VIEWCONFIG);

/**
 * Define the root NgModule
 * This module:
 * - imports the other app modules
 * - provides root providers
 * - registers router configuration
 * - registers states
 * - bootstraps a ui-view
 */
@UIRouterModule({
  imports: [CommonModule, FooModule, BarModule, BazModule],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    {provide: UIRouterConfig, useClass: MyUIRouterConfig},
  ],
  states: MAIN_STATES,
  bootstrap: [UIView]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
