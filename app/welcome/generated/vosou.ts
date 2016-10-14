
import {Component} from '@angular/core'

@Component({
  selector: 'd-vosou',
  template: `
    <span [attr.aria-label]="msg" [hidden]="false">This is a dummy component for Vosou</span>
    <div (click)="doNothing($event)"></div>
    `,
})
export class Vosou {
    msg: string = 'nothing to say';
    doNothing(evt: any) {}
}
