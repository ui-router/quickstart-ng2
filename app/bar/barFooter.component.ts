import {Component, Input} from '@angular/core';

@Component({
  selector: 'bar-header',
  styles: ['h4 { border-top: 2px solid black; margin-top: 1em; }'],
  template: `<h4>Bar Footer - {{ barList.length }} bars</h4>`
})
export class BarFooterComponent {
  @Input() barList;
}
