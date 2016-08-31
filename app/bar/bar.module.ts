/**
 * Created by Andy on 01.09.2016.
 */

import {BAR_STATES} from "./bar.states";
import {BarDetailsComponent} from "./barDetail.component";
import {BarListComponent} from "./barList.component";
import {BarFooterComponent} from "./barFooter.component";
import {CommonModule} from "@angular/common";
import {UIRouterModule} from "ui-router-ng2";

@UIRouterModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BarDetailsComponent,
    BarFooterComponent,
    BarListComponent
  ],
  states: BAR_STATES,
  providers:[]
})
export class BarModule { }
