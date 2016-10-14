
import {Component} from '@angular/core'

@Component({
  selector: 'd-ligmr',
  template: `
    <span [attr.aria-label]="msg" [hidden]="false">This is a dummy component for Ligmr</span>
    <div (click)="doNothing($event)"></div>
    `,
})
export class Ligmr {
    msg: string = 'nothing to say';
    doNothing(evt: any) {}
}
