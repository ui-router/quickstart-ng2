import {UIRouter} from "ui-router-ng2/router";
import {INITIAL_STATES} from "../app.states";
import {Http} from "angular2/http";
import {Injectable, Injector} from "angular2/core";

@Injectable()
export class MyUIRouterConfig {
  constructor(private injector: Injector) {}

  configure(uiRouter: UIRouter) {
    INITIAL_STATES.forEach(state => uiRouter.stateRegistry.register(state));

    uiRouter.urlRouterProvider.otherwise(() => uiRouter.stateService.go("app", null, null));


    // As of 1.0.0-alpha.2, ui-router only supports ng1-style string-based injection for resolves and transition hooks.
    // We're working on more ng2-friendly DI.  
    
    // In the meantime, you can map global providers to strings here, and then use the strings
    // to inject the service into your resolve or transition hook.
    
    let rootState = uiRouter.stateRegistry.root();

    rootState.resolve['http'] = () => this.injector.get(Http);
  }
}