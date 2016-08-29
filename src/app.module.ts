import {SystemJsNgModuleLoader, NgModuleFactoryLoader} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {UIView, UIRouterModule, provideUIRouter} from "ui-router-ng2";

import {FooModule} from "./foo/foo.module";
import {BarModule} from "./bar/bar.module";
// BazModule is lazy loaded

import {MyUIRouterConfig} from "./router.config";
import {MAIN_STATES} from "./app.states";

/**
 * Define the app's root NgModule
 *
 * This module:
 * - imports the other initial (non-lazy-loaded) application modules
 * - provides the UIRouter instance
 *   - registers router configuration
 *   - enables hash urls ("#/foo")
 * - provides a module lazy loading strategy (SystemJSModuleLoader)
 * - registers states
 * - bootstraps a ui-view
 */
@UIRouterModule({
  imports: [
    BrowserModule,

    FooModule,
    BarModule,
    // BazModule will be lazy loaded
  ],
  providers: [
    // Provide the UIRouter instance to the root module
    provideUIRouter({ configClass: MyUIRouterConfig, useHash: true }),
    // Provide a lazy loading strategy
    {provide: NgModuleFactoryLoader, useClass: SystemJsNgModuleLoader}
  ],
  // provide the initial states
  states: MAIN_STATES,
  // bootstrap a UIView component
  bootstrap: [UIView]
})
export class AppModule { }
