import {Component, Inject} from 'angular2/core';
import {UIROUTER_DIRECTIVES} from "ui-router-ng2";

let template = ` <h5>Nest 1 component</h5> `;

@Component({
  directives: [UIROUTER_DIRECTIVES],
  selector: 'nest1',
  template: template
})
export class Nest1Component { }
