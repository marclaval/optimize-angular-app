
import {Component} from '@angular/core'

@Component({
  selector: 'd-qucvl',
  template: `
    <span [attr.aria-label]="msg" [hidden]="false">This is a dummy component for Qucvl</span>
    <div (click)="doNothing($event)"></div>
    `,
})
export class Qucvl {
    msg: string = 'nothing to say';
    doNothing(evt: any) {}
}
