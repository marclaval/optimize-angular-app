
import {Component} from '@angular/core'

@Component({
  selector: 'd-qsdhe',
  template: `
    <span [attr.aria-label]="msg" [hidden]="false">This is a dummy component for Qsdhe</span>
    <div (click)="doNothing($event)"></div>
    `,
})
export class Qsdhe {
    msg: string = 'nothing to say';
    doNothing(evt: any) {}
}
