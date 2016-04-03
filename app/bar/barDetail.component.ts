import {Component, Inject} from 'angular2/core';
import {UIROUTER_DIRECTIVES} from "ui-router-ng2";

let template = `
<h5>Bar Details</h5>

<label>Id: </label><input type="text" [value]="bar.id"><br>
<label>Name: </label><input type="text" [value]="bar.name"><br>
<label>Count: </label><input type="text" [value]="bar.description"><br>
`;

@Component({
  directives: [UIROUTER_DIRECTIVES],
  selector: 'nest1',
  template: template
})
export class BarDetailsComponent {
  // resolve data injected by name 'barDetail' into 'bar' property
  constructor(@Inject("barDetail") public bar) { }
}
