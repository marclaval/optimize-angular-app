
import {Component} from '@angular/core'

@Component({
  selector: 'd-gfumm',
  template: `
    <span [attr.aria-label]="msg" [hidden]="false">This is a dummy component for Gfumm</span>
    <div (click)="doNothing($event)"></div>
    `,
})
export class Gfumm {
    msg: string = 'nothing to say';
    doNothing(evt: any) {}
}
