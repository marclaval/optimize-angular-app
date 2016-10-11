#!/usr/bin/env bash

# Create vendors files
cat node_modules/core-js/client/core.min.js <(echo) node_modules/zone.js/dist/zone.min.js node_modules/classlist-polyfill/src/index.js > dist/vendors.js

cat dist/vendors.js node_modules/systemjs/dist/system.js > dist/vendors_with_system.js

# Copy bundles from @angular
mkdir -p dist/dev/bundles/@angular
find . -name '*.umd.min.js' -exec cp \{\} dist/dev/bundles/@angular/ \;

# Copy bundles from @ng-bootstrap
cp node_modules/@ng-bootstrap/ng-bootstrap/bundles/ng-bootstrap.js dist/dev/bundles/

# Create systemjs bundle of Rxjs
node scripts/rxjs-system-bundler.js

# Copy all bundles to bundling-app
mkdir -p dist/bundling-app/bundles/@angular
cp -a dist/dev/bundles dist/bundling-app