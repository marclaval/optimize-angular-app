
import {Component} from '@angular/core'

@Component({
  selector: 'd-ujyyy',
  template: `
    <span [attr.aria-label]="msg" [hidden]="false">This is a dummy component for Ujyyy</span>
    <div (click)="doNothing($event)"></div>
    `,
})
export class Ujyyy {
    msg: string = 'nothing to say';
    doNothing(evt: any) {}
}
