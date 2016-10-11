#!/usr/bin/env bash

cat node_modules/core-js/client/core.min.js <(echo) node_modules/zone.js/dist/zone.min.js node_modules/classlist-polyfill/src/index.js > dist/vendors.js

cat dist/vendors.js node_modules/systemjs/dist/system.js > dist/vendors_with_system.js

mkdir -p dist/dev/bundles/@angular
find . -name '*.umd.min.js' -exec cp \{\} dist/dev/bundles/@angular/ \;

cp node_modules/@ng-bootstrap/ng-bootstrap/bundles/ng-bootstrap.js dist/dev/bundles/

node scripts/rxjs-system-bundler.js