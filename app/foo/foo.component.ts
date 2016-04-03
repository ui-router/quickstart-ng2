import {Component} from 'angular2/core';
import {UIROUTER_DIRECTIVES} from "ui-router-ng2";

let template = `
<h3>Foo Component</h3>
<a uiSref=".nest1">Nested state 1</a>
<a uiSref=".nest2">Nested state 2</a>
before<ui-view>asdfasfd</ui-view>after
`;

@Component({
    directives: [UIROUTER_DIRECTIVES],
    selector: 'foo',
    template: template
})
export class FooComponent { }
