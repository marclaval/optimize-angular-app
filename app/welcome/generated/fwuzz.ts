
import {Component} from '@angular/core'

@Component({
  selector: 'd-fwuzz',
  template: `
    <span [attr.aria-label]="msg" [hidden]="false">This is a dummy component for Fwuzz</span>
    <div (click)="doNothing($event)"></div>
    `,
})
export class Fwuzz {
    msg: string = 'nothing to say';
    doNothing(evt: any) {}
}
