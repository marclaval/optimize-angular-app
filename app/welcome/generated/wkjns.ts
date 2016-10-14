
import {Component} from '@angular/core'

@Component({
  selector: 'd-wkjns',
  template: `
    <span [attr.aria-label]="msg" [hidden]="false">This is a dummy component for Wkjns</span>
    <div (click)="doNothing($event)"></div>
    `,
})
export class Wkjns {
    msg: string = 'nothing to say';
    doNothing(evt: any) {}
}
