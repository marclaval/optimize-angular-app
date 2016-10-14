
import {Component} from '@angular/core'

@Component({
  selector: 'd-qdklu',
  template: `
    <span [attr.aria-label]="msg" [hidden]="false">This is a dummy component for Qdklu</span>
    <div (click)="doNothing($event)"></div>
    `,
})
export class Qdklu {
    msg: string = 'nothing to say';
    doNothing(evt: any) {}
}
