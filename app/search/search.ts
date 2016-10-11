import {Component} from '@angular/core'
import {Jsonp, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'search',
  template: `
    <div>
      <h2>Search</h2>
      <input type="text" placeholder="Search on Wikipedia" #foo>
      <button (click)="search(foo.value)">Search</button>
      <div *ngFor="let page of pages">{{page}}</div>
    </div>
  `
})
export class Search {
  pages: Array<any> = [];

  constructor(private jsonp: Jsonp) {}

  search(text: string) {
    if (text && text.length > 0) {
      let wikiUrl = 'https://en.wikipedia.org/w/api.php';
      let params = new URLSearchParams();
      params.set('gapfrom', text);
      params.set('gaplimit', '10');
      params.set('generator', 'allpages');
      params.set('action', 'query');
      params.set('format', 'json');
      params.set('callback', 'JSONP_CALLBACK');

      this.jsonp
        .get(wikiUrl, {search: params})
        .map(response => <string[]> response.json())
        .subscribe(data => {
          this.pages = [];
          var raw = data['query'].pages;
          for (var key in raw) {
            this.pages.push(raw[key].title);
          }
        });
    }
  }

}
