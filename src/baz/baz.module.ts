import {UIRouterModule} from "ui-router-ng2";
import {SharedModule} from "../shared.module";
import {BAZ_STATES} from "./baz.states";

/** The Baz NgModule. */
@UIRouterModule({
  imports: [SharedModule],
  states: BAZ_STATES
})
export default class BazModule { }
