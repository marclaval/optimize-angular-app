
import {Component} from '@angular/core'

@Component({
  selector: 'd-knwyp',
  template: `
    <span [attr.aria-label]="msg" [hidden]="false">This is a dummy component for Knwyp</span>
    <div (click)="doNothing($event)"></div>
    `,
})
export class Knwyp {
    msg: string = 'nothing to say';
    doNothing(evt: any) {}
}
