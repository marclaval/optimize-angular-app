
import {Component} from '@angular/core'

@Component({
  selector: 'd-lbjem',
  template: `
    <span [attr.aria-label]="msg" [hidden]="false">This is a dummy component for Lbjem</span>
    <div (click)="doNothing($event)"></div>
    `,
})
export class Lbjem {
    msg: string = 'nothing to say';
    doNothing(evt: any) {}
}
