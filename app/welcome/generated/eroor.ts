
import {Component} from '@angular/core'

@Component({
  selector: 'd-eroor',
  template: `
    <span [attr.aria-label]="msg" [hidden]="false">This is a dummy component for Eroor</span>
    <div (click)="doNothing($event)"></div>
    `,
})
export class Eroor {
    msg: string = 'nothing to say';
    doNothing(evt: any) {}
}
