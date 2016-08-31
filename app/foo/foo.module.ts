import {CommonModule} from "@angular/common";
import {FooComponent} from "./foo.component";
import {FooFooterComponent} from "./fooFooter.component";
import {Nest1Component} from "./nest1.component";
import {Nest2Component} from "./nest2.component";
import {FOO_STATES} from "./foo.states";
import {UIRouterModule} from "ui-router-ng2";
/**
 * Created by Andy on 01.09.2016.
 */

@UIRouterModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FooComponent,
    FooFooterComponent,
    Nest1Component,
    Nest2Component
  ],
  states: FOO_STATES,
  providers:[]
})
export class FooModule { }
