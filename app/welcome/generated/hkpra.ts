
import {Component} from '@angular/core'

@Component({
  selector: 'd-hkpra',
  template: `
    <span [attr.aria-label]="msg" [hidden]="false">This is a dummy component for Hkpra</span>
    <div (click)="doNothing($event)"></div>
    `,
})
export class Hkpra {
    msg: string = 'nothing to say';
    doNothing(evt: any) {}
}
