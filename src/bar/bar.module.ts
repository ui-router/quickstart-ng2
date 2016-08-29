import {UIRouterModule} from "ui-router-ng2";
import {CommonModule} from "../common.module";
import {BAR_STATES} from "./bar.states";

/** The Bar NgModule */
@UIRouterModule({
  imports: [CommonModule],
  states: BAR_STATES
})
export class BarModule { }

