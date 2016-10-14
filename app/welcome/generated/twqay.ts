
import {Component} from '@angular/core'

@Component({
  selector: 'd-twqay',
  template: `
    <span [attr.aria-label]="msg" [hidden]="false">This is a dummy component for Twqay</span>
    <div (click)="doNothing($event)"></div>
    `,
})
export class Twqay {
    msg: string = 'nothing to say';
    doNothing(evt: any) {}
}
