import {LocationStrategy, HashLocationStrategy} from "@angular/common";
import {UIView, UIRouterConfig, UIRouterModule} from "ui-router-ng2";

import {CommonModule} from "./common.module";
import {FooModule} from "./foo/foo.module";
import {BarModule} from "./bar/bar.module";
// import {BazModule} from "./baz/baz.module";

import {MyUIRouterConfig} from "./router.config";
import {MAIN_STATES} from "./app.states";
import {SystemJsNgModuleLoader, NgModuleFactoryLoader} from "@angular/core";

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
  imports: [CommonModule, FooModule, BarModule],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    {provide: UIRouterConfig, useClass: MyUIRouterConfig},
    {provide: NgModuleFactoryLoader, useClass: SystemJsNgModuleLoader}
  ],
  states: MAIN_STATES,
  bootstrap: [UIView]
})
export class AppModule { }
