
import {Component} from '@angular/core'

@Component({
  selector: 'd-kssun',
  template: `
    <span [attr.aria-label]="msg" [hidden]="false">This is a dummy component for Kssun</span>
    <div (click)="doNothing($event)"></div>
    `,
})
export class Kssun {
    msg: string = 'nothing to say';
    doNothing(evt: any) {}
}
