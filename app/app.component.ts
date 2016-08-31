import {Component} from '@angular/core';

/**
 * The top level application component.
 *
 * This component renders two uiSref "links" and has a viewport for a child to fill in.
 */

let template = `

<h1>My First UI-Router Angular 2 App</h1>

<a uiSref="app.foo" [uiOptions]="{ inherit: false }" uiSrefActive="active">Foo</a>
<a uiSref="app.bar" [uiOptions]="{ inherit: false }" uiSrefActive="active">Bar</a>
<a uiSref="app.baz" [uiOptions]="{ inherit: false }" uiSrefActive="active">Baz</a>

<ui-view></ui-view>

<ui-view name="footer"></ui-view>
`;

@Component({
  selector: 'my-app',
  template: template
})
export class AppComponent { }
