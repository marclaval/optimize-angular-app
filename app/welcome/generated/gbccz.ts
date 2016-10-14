
import {Component} from '@angular/core'

@Component({
  selector: 'd-gbccz',
  template: `
    <span [attr.aria-label]="msg" [hidden]="false">This is a dummy component for Gbccz</span>
    <div (click)="doNothing($event)"></div>
    `,
})
export class Gbccz {
    msg: string = 'nothing to say';
    doNothing(evt: any) {}
}
