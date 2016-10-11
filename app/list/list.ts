import {Component} from '@angular/core'

@Component({
  selector: 'list',
  template: `
    <div>
      <h2>Paginated list</h2>
      <ngb-pagination [collectionSize]="70" [(page)]="page"></ngb-pagination>
      <pre>Current page: {{page}}</pre>
    </div>
  `,
})
export class List {
  page: number = 1;
}
