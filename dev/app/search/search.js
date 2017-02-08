System.register(['@angular/core', '@angular/http', 'rxjs/operator/map'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, map_1;
    var Search;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (map_1_1) {
                map_1 = map_1_1;
            }],
        execute: function() {
            Search = (function () {
                function Search(http) {
                    this.http = http;
                    this.pages = [];
                }
                Search.prototype.search = function (text) {
                    var _this = this;
                    if (text && text.length > 0) {
                        var wikiUrl = 'https://en.wikipedia.org/w/api.php';
                        var headers = new http_1.Headers({
                            'Content-Type': 'application/json'
                        });
                        var params = new http_1.URLSearchParams();
                        params.set('gapfrom', text);
                        params.set('gaplimit', '10');
                        params.set('generator', 'allpages');
                        params.set('action', 'query');
                        params.set('format', 'json');
                        params.set('origin', '*');
                        var options = new http_1.RequestOptions({
                            headers: headers,
                            search: params
                        });
                        map_1.map.call(this.http.get(wikiUrl, options), function (response) { return response.json(); })
                            .subscribe(function (data) {
                            _this.pages = [];
                            var raw = data['query']['pages'];
                            for (var key in raw) {
                                _this.pages.push(raw[key].title);
                            }
                        });
                    }
                };
                Search = __decorate([
                    core_1.Component({
                        selector: 'search',
                        template: "\n    <div>\n      <h2>Search</h2>\n      <input type=\"text\" placeholder=\"Search on Wikipedia\" #foo>\n      <button (click)=\"search(foo.value)\">Search</button>\n      <div *ngFor=\"let page of pages\">{{page}}</div>\n    </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], Search);
                return Search;
            }());
            exports_1("Search", Search);
        }
    }
});
//# sourceMappingURL=search.js.map