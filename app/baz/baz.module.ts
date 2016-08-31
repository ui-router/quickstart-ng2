/**
 * Created by Andy on 01.09.2016.
 */

import {BAZ_STATES} from "./baz.states";
import {CommonModule} from "@angular/common";
import {BazDetailsComponent} from "./bazDetail.component";
import {BazFooterComponent} from "./bazFooter.component";
import {BazListComponent} from "./bazList.component";
import {UIRouterModule} from "ui-router-ng2";

@UIRouterModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BazDetailsComponent,
    BazFooterComponent,
    BazListComponent
  ],
  states: BAZ_STATES,
  providers:[]
})
export class BazModule { }
