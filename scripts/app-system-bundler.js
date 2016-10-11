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
  meta: {
    '@angular/*': { build: false },
    'rxjs/*': { build: false },
    '@ng-bootstrap/*': { build: false }
  },
  packages: {
    "app": {main: "main.jit.js", defaultExtension: "js"},
  }
});

builder.bundle('app', 'dist/bundling-app/app.min.js', options);