
import {Component} from '@angular/core'

@Component({
  selector: 'd-weplp',
  template: `
    <span [attr.aria-label]="msg" [hidden]="false">This is a dummy component for Weplp</span>
    <div (click)="doNothing($event)"></div>
    `,
})
export class Weplp {
    msg: string = 'nothing to say';
    doNothing(evt: any) {}
}
