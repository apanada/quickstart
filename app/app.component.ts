import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>Hello {{name}}</h1>
    <home></home>
    <my-list></my-list>
    <my-key></my-key>
    <event-filtering></event-filtering><br/>
    <onblur-event></onblur-event><br/>
    <contact-form></contact-form><br/>
    <user-list></user-list>
  `
})

export class AppComponent {
  name = 'Angular JS';
}
