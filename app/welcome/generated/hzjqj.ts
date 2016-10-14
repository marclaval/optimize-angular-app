
import {Component} from '@angular/core'

@Component({
  selector: 'd-hzjqj',
  template: `
    <span [attr.aria-label]="msg" [hidden]="false">This is a dummy component for Hzjqj</span>
    <div (click)="doNothing($event)"></div>
    `,
})
export class Hzjqj {
    msg: string = 'nothing to say';
    doNothing(evt: any) {}
}
