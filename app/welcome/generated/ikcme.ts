
import {Component} from '@angular/core'

@Component({
  selector: 'd-ikcme',
  template: `
    <span [attr.aria-label]="msg" [hidden]="false">This is a dummy component for Ikcme</span>
    <div (click)="doNothing($event)"></div>
    `,
})
export class Ikcme {
    msg: string = 'nothing to say';
    doNothing(evt: any) {}
}
