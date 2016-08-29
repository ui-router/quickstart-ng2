import {UIRouter} from "ui-router-ng2";
import {Injectable} from "@angular/core";

/**
 * Create your own UIRouterConfig class
 *
 * This class should be added to the Angular 2 bootstrap() providers and is
 * injected by the UIRouter provider.
 *
 * The UIRouter provider will then invoke this class's configure() function
 * and pass in the UIRouter instance.
 *
 * The configure() function performs any ui-router configuration.
 *
 * Then, UIRouter registers all the root UIRouterModule states and syncs
 * with the current URL.
 */
@Injectable()
export class MyUIRouterConfig {
  /** Inject any dependencies into the constructor */
  constructor() { }

  configure(uiRouter: UIRouter) {
    // Define a default behavior, for when the URL matched no routes
    uiRouter.urlRouterProvider.otherwise(() => uiRouter.stateService.go("app") && null );
  }
}
