
import {Component} from '@angular/core'

@Component({
  selector: 'd-glhaa',
  template: `
    <span [attr.aria-label]="msg" [hidden]="false">This is a dummy component for Glhaa</span>
    <div (click)="doNothing($event)"></div>
    `,
})
export class Glhaa {
    msg: string = 'nothing to say';
    doNothing(evt: any) {}
}
