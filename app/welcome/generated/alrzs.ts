
import {Component} from '@angular/core'

@Component({
  selector: 'd-alrzs',
  template: `
    <span [attr.aria-label]="msg" [hidden]="false">This is a dummy component for Alrzs</span>
    <div (click)="doNothing($event)"></div>
    `,
})
export class Alrzs {
    msg: string = 'nothing to say';
    doNothing(evt: any) {}
}
