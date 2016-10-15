import { Jsonp } from '@angular/http';
import 'rxjs/add/operator/map';
export declare class Search {
    private jsonp;
    pages: Array<any>;
    constructor(jsonp: Jsonp);
    search(text: string): void;
}
