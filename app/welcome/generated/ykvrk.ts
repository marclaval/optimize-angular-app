
import {Component} from '@angular/core'

@Component({
  selector: 'd-ykvrk',
  template: `
    <span [attr.aria-label]="msg" [hidden]="false">This is a dummy component for Ykvrk</span>
    <div (click)="doNothing($event)"></div>
    `,
})
export class Ykvrk {
    msg: string = 'nothing to say';
    doNothing(evt: any) {}
}
