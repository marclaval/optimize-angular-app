
import {Component} from '@angular/core'

@Component({
  selector: 'd-bynxu',
  template: `
    <span [attr.aria-label]="msg" [hidden]="false">This is a dummy component for Bynxu</span>
    <div (click)="doNothing($event)"></div>
    `,
})
export class Bynxu {
    msg: string = 'nothing to say';
    doNothing(evt: any) {}
}
