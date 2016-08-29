import {UIRouterModule} from "ui-router-ng2";
import {SharedModule} from "../shared.module";
import {BAR_STATES} from "./bar.states";

/** The Bar NgModule */
@UIRouterModule({
  imports: [SharedModule],
  states: BAR_STATES
})
export class BarModule { }

