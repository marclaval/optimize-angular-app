
import {Component} from '@angular/core'

@Component({
  selector: 'd-kthcm',
  template: `
    <span [attr.aria-label]="msg" [hidden]="false">This is a dummy component for Kthcm</span>
    <div (click)="doNothing($event)"></div>
    `,
})
export class Kthcm {
    msg: string = 'nothing to say';
    doNothing(evt: any) {}
}
