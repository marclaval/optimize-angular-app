
import {Component} from '@angular/core'

@Component({
  selector: 'd-xvhst',
  template: `
    <span [attr.aria-label]="msg" [hidden]="false">This is a dummy component for Xvhst</span>
    <div (click)="doNothing($event)"></div>
    `,
})
export class Xvhst {
    msg: string = 'nothing to say';
    doNothing(evt: any) {}
}
