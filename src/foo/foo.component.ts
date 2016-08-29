import {Component} from '@angular/core';

/**
 * This is a simple component which provides two uiSref (links) to two nested states
 * and a <ui-view> viewport for the child states to fill in
 */
let template = `
<h3>Foo Component</h3>

<a uiSref=".nest1" uiSrefActive="active">Nested state 1</a>
<a uiSref=".nest2" uiSrefActive="active">Nested state 2</a>

<ui-view></ui-view>
`;

@Component({
    selector: 'foo',
    template: template
})
export class FooComponent { }
