
import {Component} from '@angular/core'

@Component({
  selector: 'd-uxrej',
  template: `
    <span [attr.aria-label]="msg" [hidden]="false">This is a dummy component for Uxrej</span>
    <div (click)="doNothing($event)"></div>
    `,
})
export class Uxrej {
    msg: string = 'nothing to say';
    doNothing(evt: any) {}
}
