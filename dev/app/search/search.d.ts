import { Http } from '@angular/http';
export declare class Search {
    private http;
    pages: Array<any>;
    constructor(http: Http);
    search(text: string): void;
}
