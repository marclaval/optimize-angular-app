
import {Component} from '@angular/core'

@Component({
  selector: 'd-lyhgt',
  template: `
    <span [attr.aria-label]="msg" [hidden]="false">This is a dummy component for Lyhgt</span>
    <div (click)="doNothing($event)"></div>
    `,
})
export class Lyhgt {
    msg: string = 'nothing to say';
    doNothing(evt: any) {}
}
