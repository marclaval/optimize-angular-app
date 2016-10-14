
import {Component} from '@angular/core'

@Component({
  selector: 'd-xvwpq',
  template: `
    <span [attr.aria-label]="msg" [hidden]="false">This is a dummy component for Xvwpq</span>
    <div (click)="doNothing($event)"></div>
    `,
})
export class Xvwpq {
    msg: string = 'nothing to say';
    doNothing(evt: any) {}
}
