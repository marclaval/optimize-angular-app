
import {Component} from '@angular/core'

@Component({
  selector: 'd-wuqzt',
  template: `
    <span [attr.aria-label]="msg" [hidden]="false">This is a dummy component for Wuqzt</span>
    <div (click)="doNothing($event)"></div>
    `,
})
export class Wuqzt {
    msg: string = 'nothing to say';
    doNothing(evt: any) {}
}
