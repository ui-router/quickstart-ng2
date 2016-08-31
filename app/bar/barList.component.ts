import {Component, Inject} from '@angular/core';
import {UIROUTER_DIRECTIVES} from "ui-router-ng2";

/**
 * This component has "barList" (resolve data) injected into the constructor.
 *
 * It creates a list of uiSref (links) to the bar details and highlights the active uiSref
 * It provides a <ui-view> viewport for a child state to fill in
 */

let template = `
<h3>Bar Component</h3>

<ul>
  <li *ngFor="let bar of bars">
    <a uiSref=".details" [uiParams]="{barId: bar.id}" uiSrefActive="active">{{bar.name}}</a>
  </li>
</ul>

<ui-view></ui-view>
`;

@Component({
    selector: 'bar',
    template: template
})
export class BarListComponent {
  // resolve data injected by name 'barList' into 'bars' property
  constructor(@Inject("barList") public bars) { }
}
