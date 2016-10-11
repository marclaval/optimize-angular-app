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
  paths: {
    "n:*": "node_modules/*",
    "rxjs/*": "node_modules/rxjs/*.js",
  },
  map: {
    "rxjs": "n:rxjs",
  },
  packages: {
    "rxjs": {main: "Rx.js", defaultExtension: "js"},
  }
});

builder.bundle('rxjs', 'dist/dev/bundles/Rx.min.js', options);