import {NgModule} from "@angular/core";
import {HttpModule} from "@angular/http";
import {CommonModule} from "@angular/common";

/** MyCommon Module: Re-exports BrowserModule and HttpModule */
@NgModule({
  exports: [CommonModule, HttpModule],
})
export class SharedModule { }
