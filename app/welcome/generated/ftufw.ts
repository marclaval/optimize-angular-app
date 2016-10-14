
import {Component} from '@angular/core'

@Component({
  selector: 'd-ftufw',
  template: `
    <span [attr.aria-label]="msg" [hidden]="false">This is a dummy component for Ftufw</span>
    <div (click)="doNothing($event)"></div>
    `,
})
export class Ftufw {
    msg: string = 'nothing to say';
    doNothing(evt: any) {}
}
