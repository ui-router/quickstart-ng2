import {UIRouterModule} from "ui-router-ng2";
import {CommonModule} from "../common.module";
import {BAZ_STATES} from "./baz.states";

/** The Baz NgModule. */
@UIRouterModule({
  imports: [CommonModule],
  states: BAZ_STATES
})
export default class BazModule { }
