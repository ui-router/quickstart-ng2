import {Component} from 'angular2/core';
import {UIROUTER_DIRECTIVES} from "ui-router-ng2";

/**
 * This is a simple component which provides two uiSref (links) to two nested states
 * and a <ui-view> viewport for the child states to fill in
 */
let template = `
<h3>Foo Component</h3>

<a uiSref=".nest1">Nested state 1</a>
<a uiSref=".nest2">Nested state 2</a>

<ui-view></ui-view>
`;

@Component({
    directives: [UIROUTER_DIRECTIVES],
    selector: 'foo',
    template: template
})
export class FooComponent { }
