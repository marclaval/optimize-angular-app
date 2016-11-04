#!/usr/bin/env bash

# Create vendors files
cat node_modules/core-js/client/core.min.js <(echo) node_modules/zone.js/dist/zone.min.js node_modules/classlist-polyfill/src/index.js > dist/vendors.js
cat dist/vendors.js node_modules/systemjs/dist/system.js > dist/vendors_with_system.js

# Copy bundles from @angular
mkdir -p dist/dev/bundles/@angular
find . -name '*.umd.min.js' -exec cp \{\} dist/dev/bundles/@angular/ \;

# Create systemjs bundle of Rxjs and ng-bootstrap
node scripts/rxjs-system-bundler.js
node scripts/ng-bootstrap-system-bundler.js

# Copy all bundles to bundling-app
mkdir -p dist/bundling-app/bundles/@angular
cp -a dist/dev/bundles dist/bundling-app

# Copy vendor file to each sample
cp dist/vendors_with_system.js dist/bundling-app
cp dist/vendors_with_system.js dist/bundling-full
cp dist/vendors_with_system.js dist/dev

cp dist/vendors.js dist/aot-rollup
cp dist/vendors.js dist/aot-webpack
cp dist/vendors.js dist/lazyloading-webpack
cp dist/vendors.js dist/treeshaking-rollup
cp dist/vendors.js dist/treeshaking-webpack
cp dist/vendors.js dist/prerender