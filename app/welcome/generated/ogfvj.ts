
import {Component} from '@angular/core'

@Component({
  selector: 'd-ogfvj',
  template: `
    <span [attr.aria-label]="msg" [hidden]="false">This is a dummy component for Ogfvj</span>
    <div (click)="doNothing($event)"></div>
    `,
})
export class Ogfvj {
    msg: string = 'nothing to say';
    doNothing(evt: any) {}
}
