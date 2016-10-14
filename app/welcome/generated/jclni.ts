
import {Component} from '@angular/core'

@Component({
  selector: 'd-jclni',
  template: `
    <span [attr.aria-label]="msg" [hidden]="false">This is a dummy component for Jclni</span>
    <div (click)="doNothing($event)"></div>
    `,
})
export class Jclni {
    msg: string = 'nothing to say';
    doNothing(evt: any) {}
}
