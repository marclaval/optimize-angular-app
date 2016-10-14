
import {Component} from '@angular/core'

@Component({
  selector: 'd-hmhyg',
  template: `
    <span [attr.aria-label]="msg" [hidden]="false">This is a dummy component for Hmhyg</span>
    <div (click)="doNothing($event)"></div>
    `,
})
export class Hmhyg {
    msg: string = 'nothing to say';
    doNothing(evt: any) {}
}
