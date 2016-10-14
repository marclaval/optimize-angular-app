
import {Component} from '@angular/core'

@Component({
  selector: 'd-bawsf',
  template: `
    <span [attr.aria-label]="msg" [hidden]="false">This is a dummy component for Bawsf</span>
    <div (click)="doNothing($event)"></div>
    `,
})
export class Bawsf {
    msg: string = 'nothing to say';
    doNothing(evt: any) {}
}
