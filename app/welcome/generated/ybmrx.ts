
import {Component} from '@angular/core'

@Component({
  selector: 'd-ybmrx',
  template: `
    <span [attr.aria-label]="msg" [hidden]="false">This is a dummy component for Ybmrx</span>
    <div (click)="doNothing($event)"></div>
    `,
})
export class Ybmrx {
    msg: string = 'nothing to say';
    doNothing(evt: any) {}
}
