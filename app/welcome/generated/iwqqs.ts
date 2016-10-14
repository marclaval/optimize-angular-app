
import {Component} from '@angular/core'

@Component({
  selector: 'd-iwqqs',
  template: `
    <span [attr.aria-label]="msg" [hidden]="false">This is a dummy component for Iwqqs</span>
    <div (click)="doNothing($event)"></div>
    `,
})
export class Iwqqs {
    msg: string = 'nothing to say';
    doNothing(evt: any) {}
}
