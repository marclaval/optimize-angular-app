
import {Component} from '@angular/core'

@Component({
  selector: 'd-kwijt',
  template: `
    <span [attr.aria-label]="msg" [hidden]="false">This is a dummy component for Kwijt</span>
    <div (click)="doNothing($event)"></div>
    `,
})
export class Kwijt {
    msg: string = 'nothing to say';
    doNothing(evt: any) {}
}
