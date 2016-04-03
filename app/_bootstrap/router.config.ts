import {UIRouter} from "ui-router-ng2/router";
import {INITIAL_STATES} from "../app.states";
import {Http} from "angular2/http";
import {Injectable, Injector} from "angular2/core";

/**
 * This class should is added to the Angular 2 bootstrap() providers and is injected by the
 * UIRouter provider.  The UIRouter provider will then invoke this classes configure()
 * function and pass in the UIRouter instance, which we configure.  After configuration,
 * UIRouter syncs up with the current URL.
 */
@Injectable()
export class MyUIRouterConfig {
  constructor(private injector: Injector) {}

  configure(uiRouter: UIRouter) {
    // Register each state definition (from app.states.ts) with the StateRegistry
    INITIAL_STATES.forEach(state => uiRouter.stateRegistry.register(state));

    // Define a default behavior, for when the URL matched no routes
    uiRouter.urlRouterProvider.otherwise(() => uiRouter.stateService.go("app", null, null));

    // As of 1.0.0-alpha.2, ui-router only supports ng1-style string-based injection for resolves and transition hooks.
    // We're working on more ng2-friendly DI.  
    
    // In the meantime, you can map global providers to DI strings here.  Use the strings
    // to inject the service into your resolve or transition hook. (see foo.states.ts)
    
    let rootState = uiRouter.stateRegistry.root();

    rootState.resolve['http'] = () => this.injector.get(Http);
  }
}