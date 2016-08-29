import {UIRouter} from "ui-router-ng2";
import {Injectable} from "@angular/core";
declare var SystemJS;

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
  /** You may inject dependencies into the constructor */
  constructor() { }

  configure(uiRouter: UIRouter) {
    // Define a default behavior, for when the URL matched no routes
    uiRouter.urlRouterProvider.otherwise(() => uiRouter.stateService.go("app") && null );

    // Show the ui-router visualizer
    // Need to improve this example ;)
    SystemJS.import('node_modules/ui-router-visualizer/release/visualizer.min.js').then(vis => {
      vis.visualizer(uiRouter);
    })
  }
}
