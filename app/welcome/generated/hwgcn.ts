
import {Component} from '@angular/core'

@Component({
  selector: 'd-hwgcn',
  template: `
    <span [attr.aria-label]="msg" [hidden]="false">This is a dummy component for Hwgcn</span>
    <div (click)="doNothing($event)"></div>
    `,
})
export class Hwgcn {
    msg: string = 'nothing to say';
    doNothing(evt: any) {}
}
