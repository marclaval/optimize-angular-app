
import {Component} from '@angular/core'

@Component({
  selector: 'd-wmeem',
  template: `
    <span [attr.aria-label]="msg" [hidden]="false">This is a dummy component for Wmeem</span>
    <div (click)="doNothing($event)"></div>
    `,
})
export class Wmeem {
    msg: string = 'nothing to say';
    doNothing(evt: any) {}
}
