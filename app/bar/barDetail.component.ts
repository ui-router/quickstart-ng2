import {Component, Input} from '@angular/core';
import {UIROUTER_DIRECTIVES} from "ui-router-ng2";

/**
 * This component injects "barDetail" (resolve data) into the matching @Input and renders the detail */
let template = `
<h5>Bar Details</h5>

<label>Id: </label><input type="text" [value]="bar.id"><br>
<label>Name: </label><input type="text" [value]="bar.name"><br>
<label>Count: </label><input type="text" [value]="bar.description"><br>
`;

@Component({
  selector: 'bar-detail',
  template: template,
  directives: [UIROUTER_DIRECTIVES]
})
export class BarDetailsComponent {
  // `barDetail` resolve data is provided to this @Input
  @Input('barDetail') bar;
}
