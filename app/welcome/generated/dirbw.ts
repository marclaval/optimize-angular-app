
import {Component} from '@angular/core'

@Component({
  selector: 'd-dirbw',
  template: `
    <span [attr.aria-label]="msg" [hidden]="false">This is a dummy component for Dirbw</span>
    <div (click)="doNothing($event)"></div>
    `,
})
export class Dirbw {
    msg: string = 'nothing to say';
    doNothing(evt: any) {}
}
