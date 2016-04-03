import {AppComponent} from "./app.component";
import {FOO_STATES} from "./foo/foo.states";
import {BAR_STATES} from "./bar/bar.states";
import {Ng2StateDeclaration} from "ui-router-ng2/ng2/interface";

let MAIN_STATES: Ng2StateDeclaration[] = [
  { name: 'app', component: AppComponent }
];

// Export an array of all the states
export let INITIAL_STATES: Ng2StateDeclaration[] =
    MAIN_STATES.concat(FOO_STATES).concat(BAR_STATES);
