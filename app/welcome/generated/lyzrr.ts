
import {Component} from '@angular/core'

@Component({
  selector: 'd-lyzrr',
  template: `
    <span [attr.aria-label]="msg" [hidden]="false">This is a dummy component for Lyzrr</span>
    <div (click)="doNothing($event)"></div>
    `,
})
export class Lyzrr {
    msg: string = 'nothing to say';
    doNothing(evt: any) {}
}
