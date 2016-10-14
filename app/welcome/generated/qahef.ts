
import {Component} from '@angular/core'

@Component({
  selector: 'd-qahef',
  template: `
    <span [attr.aria-label]="msg" [hidden]="false">This is a dummy component for Qahef</span>
    <div (click)="doNothing($event)"></div>
    `,
})
export class Qahef {
    msg: string = 'nothing to say';
    doNothing(evt: any) {}
}
