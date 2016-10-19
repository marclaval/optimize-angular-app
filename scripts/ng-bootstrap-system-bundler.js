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
var builder = new Builder('./');
builder.config({
  meta: {
    '@angular/*': { build: false },
    'rxjs/*': { build: false }
  },
  paths: {
    "n:*": "node_modules/*",
    "@ng-bootstrap/ng-bootstrap/*": "node_modules/@ng-bootstrap/ng-bootstrap/*.js",
  },
  map: {
    "@ng-bootstrap/ng-bootstrap": "n:@ng-bootstrap/ng-bootstrap",
  },
  packages: {
    "@ng-bootstrap/ng-bootstrap": {main: "index.js", defaultExtension: "js"},
  }
});

builder.bundle('@ng-bootstrap/ng-bootstrap', 'dist/dev/bundles/ng-bootstrap.min.js', options);