
import {Component} from '@angular/core'

@Component({
  selector: 'd-tppor',
  template: `
    <span [attr.aria-label]="msg" [hidden]="false">This is a dummy component for Tppor</span>
    <div (click)="doNothing($event)"></div>
    `,
})
export class Tppor {
    msg: string = 'nothing to say';
    doNothing(evt: any) {}
}
