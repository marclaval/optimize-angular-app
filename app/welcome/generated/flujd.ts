
import {Component} from '@angular/core'

@Component({
  selector: 'd-flujd',
  template: `
    <span [attr.aria-label]="msg" [hidden]="false">This is a dummy component for Flujd</span>
    <div (click)="doNothing($event)"></div>
    `,
})
export class Flujd {
    msg: string = 'nothing to say';
    doNothing(evt: any) {}
}
