
import {Component} from '@angular/core'

@Component({
  selector: 'd-bzvtz',
  template: `
    <span [attr.aria-label]="msg" [hidden]="false">This is a dummy component for Bzvtz</span>
    <div (click)="doNothing($event)"></div>
    `,
})
export class Bzvtz {
    msg: string = 'nothing to say';
    doNothing(evt: any) {}
}
