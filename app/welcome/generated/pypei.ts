
import {Component} from '@angular/core'

@Component({
  selector: 'd-pypei',
  template: `
    <span [attr.aria-label]="msg" [hidden]="false">This is a dummy component for Pypei</span>
    <div (click)="doNothing($event)"></div>
    `,
})
export class Pypei {
    msg: string = 'nothing to say';
    doNothing(evt: any) {}
}
