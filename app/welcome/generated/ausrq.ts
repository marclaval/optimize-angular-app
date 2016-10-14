
import {Component} from '@angular/core'

@Component({
  selector: 'd-ausrq',
  template: `
    <span [attr.aria-label]="msg" [hidden]="false">This is a dummy component for Ausrq</span>
    <div (click)="doNothing($event)"></div>
    `,
})
export class Ausrq {
    msg: string = 'nothing to say';
    doNothing(evt: any) {}
}
