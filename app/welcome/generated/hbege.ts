
import {Component} from '@angular/core'

@Component({
  selector: 'd-hbege',
  template: `
    <span [attr.aria-label]="msg" [hidden]="false">This is a dummy component for Hbege</span>
    <div (click)="doNothing($event)"></div>
    `,
})
export class Hbege {
    msg: string = 'nothing to say';
    doNothing(evt: any) {}
}
