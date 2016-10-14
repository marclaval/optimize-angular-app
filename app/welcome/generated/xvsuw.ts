
import {Component} from '@angular/core'

@Component({
  selector: 'd-xvsuw',
  template: `
    <span [attr.aria-label]="msg" [hidden]="false">This is a dummy component for Xvsuw</span>
    <div (click)="doNothing($event)"></div>
    `,
})
export class Xvsuw {
    msg: string = 'nothing to say';
    doNothing(evt: any) {}
}
