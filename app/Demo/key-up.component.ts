import {Component} from "@angular/core";

@Component({
  selector: 'my-key',
  template: `<h2>Key Up Event Example</h2>
    <input (keyup)="onKey($event)">
    <p>{{value}}</p>
  `
})

export class KeyUpComponent {
  value : string = "";
  
  onKey(event : any) {
    this.value += (event.target).value + ' | ';
  }
}