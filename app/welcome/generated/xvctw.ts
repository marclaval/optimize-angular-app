
import {Component} from '@angular/core'

@Component({
  selector: 'd-xvctw',
  template: `
    <span [attr.aria-label]="msg" [hidden]="false">This is a dummy component for Xvctw</span>
    <div (click)="doNothing($event)"></div>
    `,
})
export class Xvctw {
    msg: string = 'nothing to say';
    doNothing(evt: any) {}
}
