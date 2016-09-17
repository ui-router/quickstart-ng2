import {UIRouter} from "ui-router-ng2";
import {Injectable} from "@angular/core";
declare var SystemJS;

/**
 * Create your own configuration class (if necessary) for any root/feature/lazy module.
 *
 * Pass it to the UIRouterModule.forRoot/forChild factory methods as `configClass`.
 *
 * The class will be added to the Injector and instantiate when the module loads.
 */
@Injectable()
export class MyRootUIRouterConfig {
  /** You may inject dependencies into the constructor */
  constructor(uiRouter: UIRouter) {
    // Show the ui-router visualizer
    // Need to improve this example ;)
    SystemJS.import('node_modules/ui-router-visualizer/release/visualizer.min.js').then(vis => {
      vis.visualizer(uiRouter);
    })
  }
}
