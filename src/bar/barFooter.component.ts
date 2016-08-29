import {Component, Input} from '@angular/core';

/**
 * This component is shown in the footer when any bar state is active.
 * It receives the `barList` resolve data and displays the count of bar objects loaded.
 */
@Component({
  selector: 'bar-footer',
  styles: ['h4 { border-top: 2px solid black; margin-top: 1em; }'],
  template: `<h4>Bar Module Active - {{ barList.length }} bars</h4>`
})
export class BarFooterComponent {
  @Input() barList;
}
