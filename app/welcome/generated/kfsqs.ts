
import {Component} from '@angular/core'

@Component({
  selector: 'd-kfsqs',
  template: `
    <span [attr.aria-label]="msg" [hidden]="false">This is a dummy component for Kfsqs</span>
    <div (click)="doNothing($event)"></div>
    `,
})
export class Kfsqs {
    msg: string = 'nothing to say';
    doNothing(evt: any) {}
}
