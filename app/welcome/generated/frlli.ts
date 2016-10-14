
import {Component} from '@angular/core'

@Component({
  selector: 'd-frlli',
  template: `
    <span [attr.aria-label]="msg" [hidden]="false">This is a dummy component for Frlli</span>
    <div (click)="doNothing($event)"></div>
    `,
})
export class Frlli {
    msg: string = 'nothing to say';
    doNothing(evt: any) {}
}
