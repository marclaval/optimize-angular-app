
import {Component} from '@angular/core'

@Component({
  selector: 'd-wttlz',
  template: `
    <span [attr.aria-label]="msg" [hidden]="false">This is a dummy component for Wttlz</span>
    <div (click)="doNothing($event)"></div>
    `,
})
export class Wttlz {
    msg: string = 'nothing to say';
    doNothing(evt: any) {}
}
