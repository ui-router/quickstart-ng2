import {Component} from '@angular/core';

/**
 * This component is shown in the footer when any foo state is active.
 */
@Component({
  styles: ['h4 { border-top: 1px solid black; margin-top: 2em; }'],
  selector: 'foo-footer',
  template: `<h4>Foo Module Active</h4>`
})
export class FooFooterComponent { }
