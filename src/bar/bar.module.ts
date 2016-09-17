import {UIRouterModule} from "ui-router-ng2";
import {SharedModule} from "../shared.module";
import {BAR_STATES} from "./bar.states";
import {NgModule} from "@angular/core";
import {BarListComponent} from "./barList.component";
import {BarDetailsComponent} from "./barDetail.component";
import {BarFooterComponent} from "./barFooter.component";

/** The Bar NgModule */
@NgModule({
  imports: [
    SharedModule,
    UIRouterModule.forChild({ states: BAR_STATES })
  ],
  declarations: [
    BarListComponent,
    BarDetailsComponent,
    BarFooterComponent,
  ]
})
export class BarModule { }

