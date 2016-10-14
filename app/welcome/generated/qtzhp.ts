
import {Component} from '@angular/core'

@Component({
  selector: 'd-qtzhp',
  template: `
    <span [attr.aria-label]="msg" [hidden]="false">This is a dummy component for Qtzhp</span>
    <div (click)="doNothing($event)"></div>
    `,
})
export class Qtzhp {
    msg: string = 'nothing to say';
    doNothing(evt: any) {}
}
