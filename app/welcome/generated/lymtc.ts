
import {Component} from '@angular/core'

@Component({
  selector: 'd-lymtc',
  template: `
    <span [attr.aria-label]="msg" [hidden]="false">This is a dummy component for Lymtc</span>
    <div (click)="doNothing($event)"></div>
    `,
})
export class Lymtc {
    msg: string = 'nothing to say';
    doNothing(evt: any) {}
}
