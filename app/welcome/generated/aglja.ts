
import {Component} from '@angular/core'

@Component({
  selector: 'd-aglja',
  template: `
    <span [attr.aria-label]="msg" [hidden]="false">This is a dummy component for Aglja</span>
    <div (click)="doNothing($event)"></div>
    `,
})
export class Aglja {
    msg: string = 'nothing to say';
    doNothing(evt: any) {}
}
