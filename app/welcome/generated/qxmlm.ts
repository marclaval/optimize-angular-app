
import {Component} from '@angular/core'

@Component({
  selector: 'd-qxmlm',
  template: `
    <span [attr.aria-label]="msg" [hidden]="false">This is a dummy component for Qxmlm</span>
    <div (click)="doNothing($event)"></div>
    `,
})
export class Qxmlm {
    msg: string = 'nothing to say';
    doNothing(evt: any) {}
}
