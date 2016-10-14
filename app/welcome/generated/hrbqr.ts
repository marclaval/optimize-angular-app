
import {Component} from '@angular/core'

@Component({
  selector: 'd-hrbqr',
  template: `
    <span [attr.aria-label]="msg" [hidden]="false">This is a dummy component for Hrbqr</span>
    <div (click)="doNothing($event)"></div>
    `,
})
export class Hrbqr {
    msg: string = 'nothing to say';
    doNothing(evt: any) {}
}
