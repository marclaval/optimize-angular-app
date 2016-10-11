import {Component} from '@angular/core'

@Component({
  selector: 'subscribe',
  template: `
    <div>
      <h2>Subscribe</h2>
      Please enter your email address:<br>
      <input [(ngModel)]="address">
      <pre>Value entered: {{address}}</pre>
    </div>
  `
})
export class Subscribe {
  address: string = '';
}
