import {Component} from 'angular2/core';
import {UIROUTER_DIRECTIVES} from "ui-router-ng2";

let template = `
<h1>My First Angular 2 UI-Router App</h1>

<a uiSref="app.foo" uiSrefActive="active">Foo</a>
<a uiSref="app.bar" uiSrefActive="active">Bar</a>

<ui-view></ui-view>
`;

@Component({
  directives: [UIROUTER_DIRECTIVES],
  selector: 'my-app',
  template: template
})
export class AppComponent { }
