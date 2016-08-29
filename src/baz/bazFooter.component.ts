import {Component, Input} from '@angular/core';

/** 
 * This component is shown in the footer when any baz state is active.
 * It receives the `bazList` resolve data and displays the count of baz objects loaded.
 */
@Component({
  selector: 'baz-footer',
  styles: ['h4 { border-top: 2px solid black; margin-top: 1em; }'],
  template: `<h4>Baz Module Active - {{ bazList.length }} bazs</h4>`
})
export class BazFooterComponent {
  @Input() bazList;
}
