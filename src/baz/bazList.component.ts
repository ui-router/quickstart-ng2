import {Component, Inject} from '@angular/core';

/**
 * This component injects "bazList" (resolve data)
 *
 * It creates a list of uiSref (links) to the baz details
 *
 * It does not have a nested <ui-view> viewport because the nested app.baz.details state
 * replaces this component with the BazDetailsComponent, using view targeting.
 */

let template = `
<h3>Baz Component</h3>

<ul>
  <li *ngFor="let baz of bazs"><a uiSref=".details" [uiParams]="{bazId: baz.id}">{{baz.name}}</a>
  </li>
</ul>
`;

@Component({
  selector: 'baz',
  template: template
})
export class BazListComponent {
  // resolve data injected by name 'bazList' into 'bazs' property
  constructor(@Inject("bazList") public bazs) {
  }
}
