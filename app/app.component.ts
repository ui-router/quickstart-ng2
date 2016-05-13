import {Component} from '@angular/core';
import {UIROUTER_DIRECTIVES} from "ui-router-ng2";

/**
 * The top level application component.
 *
 * This component renders two uiSref "links" and has a viewport for a child to fill in.
 */

let template = `

<h1>My First Angular 2 UI-Router App</h1>

<a uiSref="app.foo" [uiOptions]="{ inherit: false }" uiSrefActive="active">Foo</a>
<a uiSref="app.bar" [uiOptions]="{ inherit: false }" uiSrefActive="active">Bar</a>
<a uiSref="app.baz" [uiOptions]="{ inherit: false }" uiSrefActive="active">Baz</a>

<ui-view></ui-view>

<ui-view name="footer"></ui-view>
`;

@Component({
  directives: [UIROUTER_DIRECTIVES],
  selector: 'my-app',
  template: template
})
export class AppComponent { }
