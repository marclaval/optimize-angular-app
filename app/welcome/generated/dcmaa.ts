
import {Component} from '@angular/core'

@Component({
  selector: 'd-dcmaa',
  template: `
    <span [attr.aria-label]="msg" [hidden]="false">This is a dummy component for Dcmaa</span>
    <div (click)="doNothing($event)"></div>
    `,
})
export class Dcmaa {
    msg: string = 'nothing to say';
    doNothing(evt: any) {}
}
