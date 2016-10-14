
import {Component} from '@angular/core'

@Component({
  selector: 'd-iqudy',
  template: `
    <span [attr.aria-label]="msg" [hidden]="false">This is a dummy component for Iqudy</span>
    <div (click)="doNothing($event)"></div>
    `,
})
export class Iqudy {
    msg: string = 'nothing to say';
    doNothing(evt: any) {}
}
