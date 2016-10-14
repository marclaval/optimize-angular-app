
import {Component} from '@angular/core'

@Component({
  selector: 'd-efzva',
  template: `
    <span [attr.aria-label]="msg" [hidden]="false">This is a dummy component for Efzva</span>
    <div (click)="doNothing($event)"></div>
    `,
})
export class Efzva {
    msg: string = 'nothing to say';
    doNothing(evt: any) {}
}
