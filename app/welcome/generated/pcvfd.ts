
import {Component} from '@angular/core'

@Component({
  selector: 'd-pcvfd',
  template: `
    <span [attr.aria-label]="msg" [hidden]="false">This is a dummy component for Pcvfd</span>
    <div (click)="doNothing($event)"></div>
    `,
})
export class Pcvfd {
    msg: string = 'nothing to say';
    doNothing(evt: any) {}
}
