
import {Component} from '@angular/core'

@Component({
  selector: 'd-afhva',
  template: `
    <span [attr.aria-label]="msg" [hidden]="false">This is a dummy component for Afhva</span>
    <div (click)="doNothing($event)"></div>
    `,
})
export class Afhva {
    msg: string = 'nothing to say';
    doNothing(evt: any) {}
}
