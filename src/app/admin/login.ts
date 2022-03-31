import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'login',
  template: `<h1>Login</h1>`,
})
export class LoginComponent {
  name = 'Angular ' + VERSION.major;
}
