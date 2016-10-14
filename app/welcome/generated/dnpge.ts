
import {Component} from '@angular/core'

@Component({
  selector: 'd-dnpge',
  template: `
    <span [attr.aria-label]="msg" [hidden]="false">This is a dummy component for Dnpge</span>
    <div (click)="doNothing($event)"></div>
    `,
})
export class Dnpge {
    msg: string = 'nothing to say';
    doNothing(evt: any) {}
}
