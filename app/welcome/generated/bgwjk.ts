
import {Component} from '@angular/core'

@Component({
  selector: 'd-bgwjk',
  template: `
    <span [attr.aria-label]="msg" [hidden]="false">This is a dummy component for Bgwjk</span>
    <div (click)="doNothing($event)"></div>
    `,
})
export class Bgwjk {
    msg: string = 'nothing to say';
    doNothing(evt: any) {}
}
