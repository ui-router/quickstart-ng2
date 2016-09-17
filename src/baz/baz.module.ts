import {UIRouterModule} from "ui-router-ng2";
0
import {SharedModule} from "../shared.module";
import {BAZ_STATES} from "./baz.states";
import {NgModule} from "@angular/core";
import {BazListComponent} from "./bazList.component";
import {BazDetailsComponent} from "./bazDetail.component";
import {BazFooterComponent} from "./bazFooter.component";

/** The Baz NgModule. */
@NgModule({
  imports: [
    SharedModule,
    UIRouterModule.forChild({ states: BAZ_STATES })
  ],
  declarations: [
    BazListComponent,
    BazDetailsComponent,
    BazFooterComponent,
  ]
})
export default class BazModule { }
