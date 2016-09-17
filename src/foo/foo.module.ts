import {UIRouterModule} from "ui-router-ng2";
import {FOO_STATES} from "./foo.states";
import {SharedModule} from "../shared.module";
import {NgModule} from "@angular/core";
import {FooComponent} from "./foo.component";
import {FooFooterComponent} from "./fooFooter.component";
import {Nest1Component} from "./nest1.component";
import {Nest2Component} from "./nest2.component";

/** The Foo NgModule */
@NgModule({
  imports: [
    UIRouterModule.forChild({ states: FOO_STATES }),
    SharedModule,
  ],
  declarations: [
    FooComponent,
    FooFooterComponent,
    Nest1Component,
    Nest2Component,
  ]
})
export class FooModule { }
