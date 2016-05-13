import {Component, Input} from '@angular/core';
import {UIROUTER_DIRECTIVES} from "ui-router-ng2";

/**
 * This component injects "barDetail" (resolve data) and renders the detail
 */
let template = `
<h5>Bar Details</h5>

<a uiSrefActive="active" uiSref="." [uiParams]="{ '#': 'asdf' }">anchor asdf</a>
<a uiSrefActive="active" uiSref="." [uiParams]="{ '#': 'fhqwhgads' }">anchor fhqwhgads</a>
<br>

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
  // `barDetail` resolve data as an input
  @Input('barDetail') bar;
}
