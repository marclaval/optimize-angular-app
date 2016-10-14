
import {Component} from '@angular/core'

@Component({
  selector: 'd-jzimi',
  template: `
    <span [attr.aria-label]="msg" [hidden]="false">This is a dummy component for Jzimi</span>
    <div (click)="doNothing($event)"></div>
    `,
})
export class Jzimi {
    msg: string = 'nothing to say';
    doNothing(evt: any) {}
}
