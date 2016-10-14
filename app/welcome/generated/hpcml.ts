
import {Component} from '@angular/core'

@Component({
  selector: 'd-hpcml',
  template: `
    <span [attr.aria-label]="msg" [hidden]="false">This is a dummy component for Hpcml</span>
    <div (click)="doNothing($event)"></div>
    `,
})
export class Hpcml {
    msg: string = 'nothing to say';
    doNothing(evt: any) {}
}
