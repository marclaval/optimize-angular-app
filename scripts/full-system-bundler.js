const Builder = require("systemjs-builder");
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
builder.config({
  defaultJSExtensions: true,
  transpiler: false,
  paths: {
    "n:*": "./node_modules/*",
    "rxjs/*": "node_modules/rxjs/*.js",
    "@ng-bootstrap/ng-bootstrap/*": "node_modules/@ng-bootstrap/ng-bootstrap/*.js"
  },
  map: {
    '@angular/common': 'n:@angular/common/index.js',
    '@angular/compiler': 'n:@angular/compiler/index.js',
    '@angular/core': 'n:@angular/core/index.js',
    '@angular/forms': 'n:@angular/forms/index.js',
    '@angular/http': 'n:@angular/http/index.js',
    '@angular/platform-browser': 'n:@angular/platform-browser/index.js',
    '@angular/platform-browser-dynamic': 'n:@angular/platform-browser-dynamic/index.js',
    '@angular/platform-server': 'n:@angular/platform-server/index.js',
    '@angular/router': 'n:@angular/router/index.js',
    "@ng-bootstrap/ng-bootstrap": "n:@ng-bootstrap/ng-bootstrap",
    "rxjs": "n:rxjs"
  },
  packages: {
    "app": {main: "main.jit.js", defaultExtension: "js"},
  }
});

builder.bundle('app', 'dist/bundling-full/app.min.js', options);