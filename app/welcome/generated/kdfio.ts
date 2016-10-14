
import {Component} from '@angular/core'

@Component({
  selector: 'd-kdfio',
  template: `
    <span [attr.aria-label]="msg" [hidden]="false">This is a dummy component for Kdfio</span>
    <div (click)="doNothing($event)"></div>
    `,
})
export class Kdfio {
    msg: string = 'nothing to say';
    doNothing(evt: any) {}
}
