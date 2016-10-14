
import {Component} from '@angular/core'

@Component({
  selector: 'd-vvmfn',
  template: `
    <span [attr.aria-label]="msg" [hidden]="false">This is a dummy component for Vvmfn</span>
    <div (click)="doNothing($event)"></div>
    `,
})
export class Vvmfn {
    msg: string = 'nothing to say';
    doNothing(evt: any) {}
}
