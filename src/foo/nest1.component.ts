import {Component} from '@angular/core';

/**
 * This is a simple component used as the component for the app.foo.nest1 state
 * to demonstrate grandchildren states
 */
let template = ` <h5>Nest 1 component</h5> `;

@Component({
  selector: 'nest1',
  template: template
})
export class Nest1Component { }
