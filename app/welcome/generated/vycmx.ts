
import {Component} from '@angular/core'

@Component({
  selector: 'd-vycmx',
  template: `
    <span [attr.aria-label]="msg" [hidden]="false">This is a dummy component for Vycmx</span>
    <div (click)="doNothing($event)"></div>
    `,
})
export class Vycmx {
    msg: string = 'nothing to say';
    doNothing(evt: any) {}
}
