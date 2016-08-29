import {UIRouterModule} from "ui-router-ng2";
import {CommonModule} from "../common.module";
import {FOO_STATES} from "./foo.states";

/** The Foo NgModule */
@UIRouterModule({
  imports: [CommonModule],
  states: FOO_STATES
})
export class FooModule { }
