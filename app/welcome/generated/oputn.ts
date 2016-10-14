
import {Component} from '@angular/core'

@Component({
  selector: 'd-oputn',
  template: `
    <span [attr.aria-label]="msg" [hidden]="false">This is a dummy component for Oputn</span>
    <div (click)="doNothing($event)"></div>
    `,
})
export class Oputn {
    msg: string = 'nothing to say';
    doNothing(evt: any) {}
}
