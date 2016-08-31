import {Component, Input} from '@angular/core';
import {UIROUTER_DIRECTIVES} from "ui-router-ng2";

/**
 * This component receives `bazDetail` resolve data into the `bazDetail` input, then renders the detail
 * It has a link back to the parent state, which is `app.baz`
 */
let template = `
<h5>Baz Details</h5>
<a uiSref="^">Back to list</a> <br>

<label>Id: </label><input type="text" [value]="bazDetail.id"><br>
<label>Name: </label><input type="text" [value]="bazDetail.name"><br>
<label>Count: </label><input type="text" [value]="bazDetail.description"><br>
`;

@Component({
  selector: 'baz-detail',
  template: template,
  // `bazDetail` resolve data is provided to the `bazDetail` input
  inputs: ["bazDetail"],
})
export class BazDetailsComponent {
  bazDetail;
}
