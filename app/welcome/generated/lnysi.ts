
import {Component} from '@angular/core'

@Component({
  selector: 'd-lnysi',
  template: `
    <span [attr.aria-label]="msg" [hidden]="false">This is a dummy component for Lnysi</span>
    <div (click)="doNothing($event)"></div>
    `,
})
export class Lnysi {
    msg: string = 'nothing to say';
    doNothing(evt: any) {}
}
