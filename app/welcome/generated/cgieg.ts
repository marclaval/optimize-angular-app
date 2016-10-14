
import {Component} from '@angular/core'

@Component({
  selector: 'd-cgieg',
  template: `
    <span [attr.aria-label]="msg" [hidden]="false">This is a dummy component for Cgieg</span>
    <div (click)="doNothing($event)"></div>
    `,
})
export class Cgieg {
    msg: string = 'nothing to say';
    doNothing(evt: any) {}
}
