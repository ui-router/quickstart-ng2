import {UIRouterModule} from "ui-router-ng2";
import {SharedModule} from "../shared.module";
import {FOO_STATES} from "./foo.states";

/** The Foo NgModule */
@UIRouterModule({
  imports: [SharedModule],
  states: FOO_STATES
})
export class FooModule { }
