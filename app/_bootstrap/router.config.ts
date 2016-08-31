import {UIRouter} from "ui-router-ng2";
import {Injectable} from "@angular/core";

/**
 * Create your own UIRouterConfig class
 *
 * This class should be added to the Angular 2 bootstrap() providers and is injected by the
 * UIRouter provider.  The UIRouter provider will then invoke this classes configure()
 * function and pass in the UIRouter instance, which we configure.  After configuration,
 * UIRouter syncs up with the current URL.
 */
@Injectable()
export class MyUIRouterConfig {
  constructor() {}

  configure(uiRouter: UIRouter) {
    // Define a default behavior, for when the URL matched no routes
    uiRouter.urlRouterProvider.otherwise(() => uiRouter.stateService.go("app", null, null) && null);
  }
}
