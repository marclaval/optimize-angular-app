
import {Component} from '@angular/core'

@Component({
  selector: 'd-gubhv',
  template: `
    <span [attr.aria-label]="msg" [hidden]="false">This is a dummy component for Gubhv</span>
    <div (click)="doNothing($event)"></div>
    `,
})
export class Gubhv {
    msg: string = 'nothing to say';
    doNothing(evt: any) {}
}
