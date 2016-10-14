
import {Component} from '@angular/core'

@Component({
  selector: 'd-jrzsd',
  template: `
    <span [attr.aria-label]="msg" [hidden]="false">This is a dummy component for Jrzsd</span>
    <div (click)="doNothing($event)"></div>
    `,
})
export class Jrzsd {
    msg: string = 'nothing to say';
    doNothing(evt: any) {}
}
