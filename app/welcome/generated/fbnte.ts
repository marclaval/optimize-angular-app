
import {Component} from '@angular/core'

@Component({
  selector: 'd-fbnte',
  template: `
    <span [attr.aria-label]="msg" [hidden]="false">This is a dummy component for Fbnte</span>
    <div (click)="doNothing($event)"></div>
    `,
})
export class Fbnte {
    msg: string = 'nothing to say';
    doNothing(evt: any) {}
}
