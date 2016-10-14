
import {Component} from '@angular/core'

@Component({
  selector: 'd-kityr',
  template: `
    <span [attr.aria-label]="msg" [hidden]="false">This is a dummy component for Kityr</span>
    <div (click)="doNothing($event)"></div>
    `,
})
export class Kityr {
    msg: string = 'nothing to say';
    doNothing(evt: any) {}
}
