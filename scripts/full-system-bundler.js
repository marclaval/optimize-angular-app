const Builder = require("systemjs-builder");

let destinationFolder = 'bundling-full';
let isAoT = false;
let isLazy = false;
if (process.argv[2] && process.argv[2] == '--aot') {
  isAoT = true;
  destinationFolder = 'aot-systemjs';
}
if (process.argv[2] && process.argv[2] == '--lazy') {
  isLazy = true;
  destinationFolder = 'lazyloading-systemjs';
}

// SystemJS build options.
var options = {
  normalize: true,
  runtime: false,
  sourceMaps: true,
  sourceMapContents: true,
  minify: true,
  mangle: true
};
var builder = new Builder('./dist/dev');
var config = {
  defaultJSExtensions: true,
  transpiler: false,
  paths: {
    "n:*": "./node_modules/*",
    "rxjs/*": "node_modules/rxjs/*.js",
    "@ng-bootstrap/ng-bootstrap/*": "node_modules/@ng-bootstrap/ng-bootstrap/*.js"
  },
  map: {
    '@angular/common': 'n:@angular/common/@angular/common.es5.js',
    '@angular/compiler': 'n:@angular/compiler/@angular/compiler.es5.js',
    '@angular/core': 'n:@angular/core/@angular/core.es5.js',
    '@angular/forms': 'n:@angular/forms/@angular/forms.es5.js',
    '@angular/http': 'n:@angular/http/@angular/http.es5.js',
    '@angular/platform-browser': 'n:@angular/platform-browser/@angular/platform-browser.es5.js',
    '@angular/platform-browser-dynamic': 'n:@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js',
    '@angular/platform-server': 'n:@angular/platform-server/@angular/platform-server.es5.js',
    '@angular/router': 'n:@angular/router/@angular/router.es5.js',
    "@ng-bootstrap/ng-bootstrap": "n:@ng-bootstrap/ng-bootstrap",
    "rxjs": "n:rxjs"
  },
  packages: {
    "app": {main: isAoT ? "main.aot.js" : (isLazy ? "main.lazy.js" : "main.jit.js"), defaultExtension: "js"},
  }
}

if (isLazy) {
  config.packages['app/list'] = {main: "list.module.ngfactory.js"}
  config.packages['app/search'] = {main: "search.module.ngfactory.js"}
  config.packages['app/subscribe'] = {main: "subscribe.module.ngfactory.js"}
}

builder.config(config);
builder.bundle('app', 'dist/' + destinationFolder + '/app.min.js', options);

if (isLazy) {
  builder.bundle('app', 'dist/dev/app.min.js', options);
  setTimeout(() => {
    builder.bundle('app/list - app.min.js', 'dist/' + destinationFolder + '/list.min.js', options);
    builder.bundle('app/search - app.min.js', 'dist/' + destinationFolder + '/search.min.js', options);
    builder.bundle('app/subscribe - app.min.js', 'dist/' + destinationFolder + '/subscribe.min.js', options);
  }, 5000);

}