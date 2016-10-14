
import {Component} from '@angular/core'

@Component({
  selector: 'd-mcbnj',
  template: `
    <span [attr.aria-label]="msg" [hidden]="false">This is a dummy component for Mcbnj</span>
    <div (click)="doNothing($event)"></div>
    `,
})
export class Mcbnj {
    msg: string = 'nothing to say';
    doNothing(evt: any) {}
}
