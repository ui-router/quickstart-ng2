import {Component, Inject} from 'angular2/core';
import {UIROUTER_DIRECTIVES} from "ui-router-ng2";
import {CORE_DIRECTIVES} from "angular2/common";

let template = `
<h3>Bar Component</h3>
<ul>
  <li *ngFor="#bar of bars">
    <a uiSref=".details" [uiParams]="{barId: bar.id}" uiSrefActive="active">{{bar.name}}</a>
  </li>
</ul>
<ui-view></ui-view>
`;

@Component({
    directives: [UIROUTER_DIRECTIVES, CORE_DIRECTIVES],
    selector: 'bar',
    template: template
})
export class BarListComponent {
  // resolve data injected by name 'barList' into 'bars' property
  constructor(@Inject("barList") public bars) { }
}
