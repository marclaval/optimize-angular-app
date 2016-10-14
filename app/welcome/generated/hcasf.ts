
import {Component} from '@angular/core'

@Component({
  selector: 'd-hcasf',
  template: `
    <span [attr.aria-label]="msg" [hidden]="false">This is a dummy component for Hcasf</span>
    <div (click)="doNothing($event)"></div>
    `,
})
export class Hcasf {
    msg: string = 'nothing to say';
    doNothing(evt: any) {}
}
