import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'list',
  template: `<h1>List</h1>`,
})
export class ListComponent {
  name = 'Angular ' + VERSION.major;
}
