import {UIRouter} from "ui-router-ng2";
import {INITIAL_STATES} from "../app.states";
import {Injectable, Injector} from "@angular/core";

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
    uiRouter.urlRouterProvider.otherwise(() => uiRouter.stateService.go("app", null, null) && null);
  }
}
