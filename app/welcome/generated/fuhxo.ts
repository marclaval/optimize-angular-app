
import {Component} from '@angular/core'

@Component({
  selector: 'd-fuhxo',
  template: `
    <span [attr.aria-label]="msg" [hidden]="false">This is a dummy component for Fuhxo</span>
    <div (click)="doNothing($event)"></div>
    `,
})
export class Fuhxo {
    msg: string = 'nothing to say';
    doNothing(evt: any) {}
}
