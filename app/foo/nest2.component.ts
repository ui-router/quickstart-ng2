import {Component} from 'angular2/core';

/**
 * This is a simple component used as the component for the app.foo.nest1 state
 * to demonstrate grandchildren states
 */
let template = `<h5>Nest 2 component</h5>`;

@Component({
  selector: 'nest1',
  template: template
})
export class Nest2Component { }
