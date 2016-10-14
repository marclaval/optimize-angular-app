
import {Component} from '@angular/core'

@Component({
  selector: 'd-rrtoi',
  template: `
    <span [attr.aria-label]="msg" [hidden]="false">This is a dummy component for Rrtoi</span>
    <div (click)="doNothing($event)"></div>
    `,
})
export class Rrtoi {
    msg: string = 'nothing to say';
    doNothing(evt: any) {}
}
