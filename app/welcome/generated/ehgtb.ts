
import {Component} from '@angular/core'

@Component({
  selector: 'd-ehgtb',
  template: `
    <span [attr.aria-label]="msg" [hidden]="false">This is a dummy component for Ehgtb</span>
    <div (click)="doNothing($event)"></div>
    `,
})
export class Ehgtb {
    msg: string = 'nothing to say';
    doNothing(evt: any) {}
}
