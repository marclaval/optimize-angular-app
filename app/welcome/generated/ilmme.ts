
import {Component} from '@angular/core'

@Component({
  selector: 'd-ilmme',
  template: `
    <span [attr.aria-label]="msg" [hidden]="false">This is a dummy component for Ilmme</span>
    <div (click)="doNothing($event)"></div>
    `,
})
export class Ilmme {
    msg: string = 'nothing to say';
    doNothing(evt: any) {}
}
