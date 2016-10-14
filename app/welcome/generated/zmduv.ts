
import {Component} from '@angular/core'

@Component({
  selector: 'd-zmduv',
  template: `
    <span [attr.aria-label]="msg" [hidden]="false">This is a dummy component for Zmduv</span>
    <div (click)="doNothing($event)"></div>
    `,
})
export class Zmduv {
    msg: string = 'nothing to say';
    doNothing(evt: any) {}
}
