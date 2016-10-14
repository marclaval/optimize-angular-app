
import {Component} from '@angular/core'

@Component({
  selector: 'd-npwjs',
  template: `
    <span [attr.aria-label]="msg" [hidden]="false">This is a dummy component for Npwjs</span>
    <div (click)="doNothing($event)"></div>
    `,
})
export class Npwjs {
    msg: string = 'nothing to say';
    doNothing(evt: any) {}
}
