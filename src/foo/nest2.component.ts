import {Component} from '@angular/core';

/**
 * This component demonstrates use of the '#' state parameter, which updates the url hash.
 * The '#' parameter is implicitly available.
 *
 * Note: the parameter value is cleared when clicking a top-level nav link, "Foo", "Bar", "Baz"
 * using `{ inherit: false }`
 */
let template = `
<h5>Nest 2 component</h5>

<a uiSref="." [uiParams]="{ '#': 'asdf' }" uiSrefActive="active" >anchor asdf</a> <br>
<a uiSref="." [uiParams]="{ '#': 'fhqwhgads' }" uiSrefActive="active" >anchor fhqwhgads</a>
`;

@Component({
  selector: 'nest1',
  template: template
})
export class Nest2Component { }
