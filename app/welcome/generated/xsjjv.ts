
import {Component} from '@angular/core'

@Component({
  selector: 'd-xsjjv',
  template: `
    <span [attr.aria-label]="msg" [hidden]="false">This is a dummy component for Xsjjv</span>
    <div (click)="doNothing($event)"></div>
    `,
})
export class Xsjjv {
    msg: string = 'nothing to say';
    doNothing(evt: any) {}
}
