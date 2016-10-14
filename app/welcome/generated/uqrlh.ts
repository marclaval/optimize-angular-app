
import {Component} from '@angular/core'

@Component({
  selector: 'd-uqrlh',
  template: `
    <span [attr.aria-label]="msg" [hidden]="false">This is a dummy component for Uqrlh</span>
    <div (click)="doNothing($event)"></div>
    `,
})
export class Uqrlh {
    msg: string = 'nothing to say';
    doNothing(evt: any) {}
}
