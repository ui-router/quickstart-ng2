import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";

/** Common Module: Re-exports BrowserModule and HttpModule */
@NgModule({
  imports: [BrowserModule, HttpModule],
  exports: [BrowserModule, HttpModule],
})
export class CommonModule { }
