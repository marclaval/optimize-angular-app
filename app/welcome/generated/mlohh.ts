
import {Component} from '@angular/core'

@Component({
  selector: 'd-mlohh',
  template: `
    <span [attr.aria-label]="msg" [hidden]="false">This is a dummy component for Mlohh</span>
    <div (click)="doNothing($event)"></div>
    `,
})
export class Mlohh {
    msg: string = 'nothing to say';
    doNothing(evt: any) {}
}
