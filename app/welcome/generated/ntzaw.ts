
import {Component} from '@angular/core'

@Component({
  selector: 'd-ntzaw',
  template: `
    <span [attr.aria-label]="msg" [hidden]="false">This is a dummy component for Ntzaw</span>
    <div (click)="doNothing($event)"></div>
    `,
})
export class Ntzaw {
    msg: string = 'nothing to say';
    doNothing(evt: any) {}
}
